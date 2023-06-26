import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

if (!process.env.NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY is not defined");
}

if (!process.env.NOTION_CONTACT_DATABASE_ID) {
  throw new Error("NOTION_CONTACT_DATABASE_ID is not defined");
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const nmd = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_CONTACT_DATABASE_ID;

export type Contact = {
  name: string;
  email: string;
  message: string;
};

type UpdateDatabaseResult = {
  error: Error | null;
  message: string;
};

// This adds a new contact to the database
// It also adds a comment to the newly created page with a mention to me
// so that I get a push notification.
export async function addContactToDatabase(
  contact: Contact
): Promise<UpdateDatabaseResult> {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: contact.name,
              },
            },
          ],
        },
        Email: {
          email: contact.email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: contact.message,
              },
            },
          ],
        },
        Status: {
          select: {
            name: "New",
          },
        },
      },
    });

    const { id } = response;
    const commentResponse = await notion.comments.create({
      parent: {
        page_id: id,
      },
      rich_text: [
        {
          text: {
            content: `${contact.name} just filled out the contact form.`,
          },
        },
        {
          mention: {
            user: {
              // This is my user id in notion
              // I will receive a push notification whenever someone fills out the contact form
              id: "1e0a8d19-8171-4f19-8368-d405da084408",
            },
          },
        },
      ],
    });
  } catch (error: any) {
    console.error(error);
    return {
      error: error,
      message: "Failed to add contact to database",
    };
  }

  return {
    error: null,
    message: "Contact added to database",
  };
}

////////////////////////
// Blog articles
////////////////////////
const blogPageID = "64a8f0d5-98b6-4e40-8bc3-a844c57553b1";

export async function getBlogArticles() {
  const articles = await getBlogPageChildrenIDs();

  const articleContent = articles.map(async (article) => {
    const mdblocks = await nmd.pageToMarkdown(article.id);
    const mdstring = nmd.toMarkdownString(mdblocks);

    return mdstring.parent;
  });

  return Promise.all(articleContent);
}

// Fetch every page id that is a direct child of the blog page
// Note: Every child of the blog page is a blog article
async function getBlogPageChildrenIDs() {
  const response = await notion.blocks.children.list({
    block_id: blogPageID,
  });

  console.log(response.results);

  return response.results.map((result) => {
    return {
      id: result.id,
    };
  });
}

// Fetch the content of a blog article
export async function getBlogArticleContent(id: string) {
  const response = await notion.blocks.children.list({
    block_id: id,
  });

  return response.results;
}

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { type } from "os";

if (!process.env.NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY is not defined");
}

if (!process.env.NOTION_CONTACT_DATABASE_ID) {
  throw new Error("NOTION_CONTACT_DATABASE_ID is not defined");
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const nmd = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_CONTACT_DATABASE_ID;
const blogPageID = "64a8f0d5-98b6-4e40-8bc3-a844c57553b1";

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
export type BlogArticle = {
  title: string;
  markdown: string;
  created: string;
  slug: string;
};

// Fetches all blog articles
export async function getBlogArticles(): Promise<Map<string, BlogArticle>> {
  const articleMetadata = await getBlogPageChildrenIDs();

  const articlePromises = articleMetadata.map(async (meta) => {
    const mdblocks = await nmd.pageToMarkdown(meta.id);
    const mdstring = nmd.toMarkdownString(mdblocks);

    return {
      title: meta.title,
      markdown: mdstring.parent || "",
      created: meta.created,
      slug: meta.title.toLowerCase().replace(/\s/g, "-"),
    };
  });

  const articleContent = await Promise.all(articlePromises);

  const articles = new Map<string, BlogArticle>();
  for (const article of articleContent) {
    articles.set(article.slug, article);
  }

  return articles;
}

// Fetch every page id that is a direct child of the blog page
// Note: Every child of the blog page is a blog article
async function getBlogPageChildrenIDs() {
  const response = await notion.blocks.children.list({
    block_id: blogPageID,
  });

  return response.results.map((result) => {
    // Notion api typing lacks most fields.
    const resultData = result as NotionBlock;
    return {
      id: resultData.id,
      title: resultData.child_page.title,
      created: resultData.created_time,
    };
  });
}

////////////////////////
// Notion types
////////////////////////
// Type representing the parent of a block
type BlockParent = {
  type: string;
  page_id: string;
};

// Type representing a person or bot that modified a block
type BlockUser = {
  object: string;
  id: string;
};

type ChildPage = {
  title: string;
};

// Type representing a block
type NotionBlock = {
  object: string;
  id: string;
  parent: BlockParent;
  created_time: string;
  last_edited_time: string;
  created_by: BlockUser;
  last_edited_by: BlockUser;
  has_children: Boolean;
  archived: Boolean;
  type: string;
  child_page: ChildPage;
};

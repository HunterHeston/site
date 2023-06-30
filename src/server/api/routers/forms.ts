import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { addContactToDatabase } from "~/lib/notion";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const formsRouter = createTRPCRouter({
  contactSubmit: publicProcedure
    .input(
      z.object({
        fullname: z.string(),
        email: z.string().email(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        await addContactToDatabase({
          name: input.fullname,
          email: input.email,
          message: input.message,
        });
      } catch (e) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error adding contact to database",
          cause: e,
        });
      }

      return {
        message: `Hello ${input.fullname}`,
      };
    }),
});

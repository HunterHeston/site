import { z } from "zod";
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
    .mutation(({ input }) => {
      console.log(input);
      return {
        message: `Hello ${input.fullname}`,
      };
    }),
});

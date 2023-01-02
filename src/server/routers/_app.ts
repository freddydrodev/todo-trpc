import { trpcProcedure, trpcRouter } from "../trpc";

export const appRouter = trpcRouter({
  hello: trpcProcedure.query((data) => {
    console.log(data);

    return { success: true, data: "Hello World" };
  }),
});

export type TAppRouter = typeof appRouter;

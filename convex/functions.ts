import { query } from "./_generated/server";

export const healthCheck = query({
  handler: async () => "OK",
});

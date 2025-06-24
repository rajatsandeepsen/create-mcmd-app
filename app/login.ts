import { z } from "zod";
import { defineCommand } from "mcmd";

export const options = z.object({
    username: z.string()
});

export const alias = undefined

export default defineCommand<typeof options>(({ username }) => {
    console.log("Login", username)
});

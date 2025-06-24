import { z } from "zod";
import { defineCommand } from "mcmd";

export const options = z.object({
    name: z.string()
});

export default defineCommand<typeof options>(({ name }) => {
    console.log("Hi", name)
});

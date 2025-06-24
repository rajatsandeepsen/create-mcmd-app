import { z } from "zod";
import { defineCommand } from "mcmd";

export const options = z.object({});

export const alias = "i";

export default defineCommand<typeof options>(({}) => {
    console.log("Init");
});

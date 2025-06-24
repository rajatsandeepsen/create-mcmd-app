import { BunPlugin } from "mcmd/plugin";
import dts from "bun-plugin-dts";

Bun.build({
    entrypoints: ["./.mcmd/cli.ts"],
    packages: "external",
    target: "node",
    splitting: true,
    outdir: "./dist",
    plugins: [
        BunPlugin(),
        dts({
            output: {
                exportReferencedTypes: true,
                noBanner: true,
            },
        }),
    ],
});

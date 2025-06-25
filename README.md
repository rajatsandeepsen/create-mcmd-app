# MCMD Starter Template

This project was created using `bun create mcmd-app` in Bun. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

### Installation

```bash
bun install
```

### Usage

Transpile the code (dev mode)
```bash
bun run transpile

# or
# bunx mcmd transpile
```

Run the CLI (dev mode)
```bash
bun run cli --name Rajat

# or
# bun run ./.mcmd/cli.ts
```

Build the CLI
```bash
bun run build

# or
# bunx mcmd build
```

### Folder Structure

```
root
 ├── .mcmd
 ├── node_modules
 │
 ├─┬ app
 │ ├── index.ts          # npx my-cli
 │ ├─┬ init
 │ │ ├── something.ts    # npx my-cli init something
 │ │ └── index.ts        # npx my-cli init
 │ └── login.ts          # npx my-cli login
 │
 ├── package.json
 ├── build.ts
 ├── .gitignore
 ├── README.md
 └── tsconfig.json
```

### Coding

Don't need to import `zod` or `Command`, we'll handle everything for you.

```ts
// app/index.ts

export const options = z.object({
    name: z.string()
});

export default Command((data) => {
    const { name } = data;
    console.log("Hi", name);
});

// npx my-cli --name Rajat
```

```ts
// app/init.ts

export default () => {
    console.log("Done Init");
};

// npx my-cli init
```

### Final Build

```bash
bun run build

# or
# bunx mcmd build
```

### Publish CLI

```json
// package.json
{
    "name": "my-cli",
    "version": "0.0.0",
    "bin": "./dist/cli.js",
    "files": ["dist/**/*"],
    ...
}
```

```bash
bun publish
```

### Enjoy CLI

```bash
bunx my-cli --name Rajat
```

### References

- [Bun](https://bun.sh)
- [MCMD](https://github.com/rajatsandeepsen/mcmd)

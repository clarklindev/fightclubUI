## documentation

### vite support for MDX files
- https://github.com/brillout/vite-plugin-mdx/issues/44#issuecomment-974540152

```sh
pnpm install @mdx-js/rollup
```

- Configure Vite: In your vite.config.js or vite.config.ts file,
- need to import and configure the MDX plugin.

```ts
//vite.config.ts
import mdx from "@mdx-js/rollup"

export default defineConfig(({mode})=>{
  return {
    plugins: [react(), mdx()],
    //...
  }
});
```

### Using MDX files
- Once the plugin is set up, you can import and use .mdx files in your components or pages. 
- For example, if you have a page about.mdx, you can import it like this:

```ts
import About from './about.mdx';

// Inside your component or page
function App() {
  return <About />;
}

```

### Add a TypeScript Declaration for MDX
- You need to add a TypeScript declaration to let TypeScript know how to handle .mdx files.
- Create or modify a global.d.ts or vite-env.d.ts file (in your src directory or root) and add the following declaration:

```ts
declare module '*.mdx' {
  // You can adjust this to use a more specific type if needed
  import { ComponentType } from 'react';
  const content: ComponentType;
  export default content;
}
```

- This tells TypeScript that when importing .mdx files, they will be treated as React components (using ComponentType).

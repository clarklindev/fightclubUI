declare module '*.mdx' {
    // You can adjust this to use a more specific type if needed
    import { ComponentType } from 'react';
    const content: ComponentType;
    export default content;
}
declare module "*.mdx" {
  const MDXComponent: React.FC<any>;
  export const frontMatter: Record<string, any>;
  export default MDXComponent;
}

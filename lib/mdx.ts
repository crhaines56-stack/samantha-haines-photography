import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...data };
    })
    .filter((post: Record<string, unknown>) => post.published !== false)
    .sort(
      (a: Record<string, unknown>, b: Record<string, unknown>) =>
        new Date(b.date as string).getTime() - new Date(a.date as string).getTime()
    );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

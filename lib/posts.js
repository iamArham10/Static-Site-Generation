import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export async function getPostData() {
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse front matter
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    data,
    content: contentHtml,
  };
}

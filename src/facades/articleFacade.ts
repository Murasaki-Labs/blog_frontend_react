import { fetchArticleBySlug } from '../services/article.service';

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  previewImage?: string | null;
  authorImage?: string | null;
  author?: string | null;
  authorHandle?: string | null;
  readTime?: string | null;
  tag?: string | null;
}

export interface ParsedArticle {
  frontMatter: FrontMatter;
  markdown: string;
}

// function for removal &ldquo; и &rdquo;
function cleanQuotes(str?: string) {
  return str?.replace(/&ldquo;|&rdquo;|"/g, '').trim() || '';
}

export async function getParsedArticle(slug: string): Promise<ParsedArticle> {
  const htmlContent = await fetchArticleBySlug(slug);

  // extract Frontmatter from the first <p> and <h2>
  const pMatch = htmlContent.match(/<p>title: (.*?)\s*date: (.*?)\s*description: (.*?)<\/p>/s);
  // const h2Match = htmlContent.match(/<h2>previewImage: (.*?)<\/h2>/);

  const frontMatter: FrontMatter = {
    title: cleanQuotes(pMatch?.[1]),
    date: cleanQuotes(pMatch?.[2]),
    description: cleanQuotes(pMatch?.[3]),
    previewImage: null,
  };

  // сut Frontmatter from HTML, leave only content
  const contentStartIndex = htmlContent.indexOf('</h2>');
  const markdown =
    contentStartIndex !== -1 ? htmlContent.substring(contentStartIndex + 5).trim() : htmlContent;

  return { frontMatter, markdown };
}

import path from "path";
import fs from "fs";

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    image?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllArticles(): Article[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));
    const articles = files
        .map((file) => {
            try {
                const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
                return JSON.parse(raw) as Article;
            } catch {
                return null;
            }
        })
        .filter(Boolean) as Article[];
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
    const filePath = path.join(CONTENT_DIR, `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    try {
        const raw = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(raw) as Article;
    } catch {
        return null;
    }
}

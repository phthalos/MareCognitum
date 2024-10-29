import { type Author } from "./author";

export type Post = {
    slug: string;
    title: string;
    date: string;
    category: string;
    subcategory: string;
    language: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};

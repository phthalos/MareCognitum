import PostCategory from "@/components/post-category";
import PostOnThisPage from "@/components/post-onThisPage";
import { getAllPosts } from "@/lib/api";

export default function GamingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const allPosts = getAllPosts();

    return (
        <div className="flex flex-row justify-center py-28 mx-auto max-w-7xl px-8">
            <PostCategory posts={allPosts} />
            {children}
            <PostOnThisPage />
        </div>
    );
}

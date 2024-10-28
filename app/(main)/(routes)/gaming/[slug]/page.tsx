import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostContainer from "@/components/post-container";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";

export default async function GamingPost({ params }: Params) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <PostContainer>
            <PostHeader title={post.title} date={post.date} />
            <PostBody content={content} />
        </PostContainer>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

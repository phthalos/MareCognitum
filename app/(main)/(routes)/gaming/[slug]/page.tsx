import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostContainer from "@/components/post-container";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";
import { Slugs } from "@/interfaces/types";
import PostPrevBtn from "@/components/post-prevBtn";
import PostNextBtn from "@/components/post-nextBtn";

export default async function GamingPost({ params }: Slugs) {
    const post = getPostBySlug(params.slug);
    const all = getAllPosts();

    let nextIdx: number | undefined = undefined;
    let nextTitle: string | undefined = undefined;
    let nextSlug: string | undefined = undefined;

    let prevIdx: number | undefined = undefined;
    let prevTitle: string | undefined = undefined;
    let prevSlug: string | undefined = undefined;

    all.forEach((val, idx) => {
        if (val.slug === decodeURI(post.slug)) {
            const currentIdx: number = idx;
            // 해당 카테고리의 next post 탐색
            for (let i = 0; i <= all.length - currentIdx - 1; i++) {
                if (
                    currentIdx + i != all.length &&
                    currentIdx + i != currentIdx &&
                    all[currentIdx + i] !== undefined &&
                    all[currentIdx].subcategory == all[currentIdx + i].subcategory
                ) {
                    // console.log("current post: " + currentIdx + " " + val.title);
                    // console.log(val.date);
                    // console.log("previous post: " + (currentIdx + i) + " " + all[currentIdx + i].title);
                    // console.log(all[i].date);
                    nextIdx = currentIdx + i;
                    nextTitle = all[nextIdx].title;
                    nextSlug = "/" + all[currentIdx].category + "/" + all[nextIdx].slug;
                    return;
                } else {
                    continue;
                }
            }
            // 해당 카테고리의 prev post 탐색
            for (let i = 0; i <= currentIdx; i++) {
                if (all[currentIdx].subcategory == all[currentIdx - i].subcategory) {
                    prevIdx = currentIdx - i;
                    prevTitle = all[prevIdx].title;
                    prevSlug = "/" + all[currentIdx].category + "/" + all[prevIdx].slug;
                } else {
                    continue;
                }
            }
        }
    });

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <PostContainer>
            <PostHeader title={post.title} date={post.date} />
            <PostBody content={content} />
            <div className="flex justify-between">
                <PostPrevBtn idx={prevIdx} title={prevTitle} href={prevSlug} />
                <PostNextBtn idx={nextIdx} title={nextTitle} href={nextSlug} />
            </div>
        </PostContainer>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

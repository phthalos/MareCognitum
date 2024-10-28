import { Post } from "@/interfaces/post";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
    posts: Post[];
};

const PostCategory = ({ posts }: Props) => {
    return (
        <ul className="hidden md:flex flex-col lg:w-64 w-56">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/gaming/${post.slug}`}
                    className="text-888 hover:text-white text-sm font-medium leading-none mb-6 flex justify-between"
                >
                    {post.title}
                    <ChevronRightIcon className="w-5" />
                </Link>
            ))}
        </ul>
    );
};

export default PostCategory;

import { games } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
    posts: Post[];
};

const PostCategory = ({ posts }: Props) => {
    console.log(posts);
    return (
        <ul className="hidden md:flex flex-col lg:w-64 w-56">
            {games.map((game) => (
                <ul key={game.name} className="mb-6">
                    <li className="text-888 hover:text-white text-sm font-medium leading-none flex justify-between">
                        {game.name}
                        <ChevronRightIcon className="w-5" />
                    </li>
                    {posts.map((post) =>
                        game.name == post.subcategory ? (
                            <Link
                                key={post.slug}
                                href={`/${post.category}/${post.slug}`}
                                className="text-888 hover:text-white text-sm font-medium leading-none flex justify-between px-2"
                            >
                                {post.title}
                            </Link>
                        ) : undefined
                    )}
                </ul>
            ))}
        </ul>
    );
};

export default PostCategory;

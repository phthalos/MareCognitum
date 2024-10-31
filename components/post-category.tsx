"use client";
import { games } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    posts: Post[];
};

const PostCategory = ({ posts }: Props) => {
    const pathname = usePathname();

    return (
        // 카테고리, 포스토 개수 증가로 스크롤 생기면 ul의 top-28 부분 조정
        <ul className="h-full sticky top-28 hidden md:flex flex-col lg:w-64 w-56">
            {games.map((game) => (
                <Disclosure key={game.name} defaultOpen={true}>
                    <DisclosureButton className="mb-4 group" onClick={close}>
                        <li className="text-888 hover:text-white text-sm font-regular leading-none flex justify-between mb-4">
                            {game.name}
                            <ChevronRightIcon className="w-3 group-data-[open]:rotate-90" />
                        </li>
                        {posts.map((post) =>
                            game.name == post.subcategory ? (
                                <DisclosurePanel key={post.slug}>
                                    <Link
                                        href={`/${post.category}/${post.slug}`}
                                        className={`ml-4 pl-5 pr-3 py-2 border-l hover:text-white text-sm font-medium flex justify-between px-2 text-left ${
                                            decodeURI(pathname) == `/${post.category}/${post.slug}`
                                                ? " text-white border-white"
                                                : "text-888 border-888"
                                        }`}
                                        // className="active:text-white text-888"
                                    >
                                        {post.title}
                                    </Link>
                                </DisclosurePanel>
                            ) : undefined
                        )}
                    </DisclosureButton>
                </Disclosure>
            ))}
        </ul>
    );
};

export default PostCategory;

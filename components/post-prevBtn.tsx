import { Button } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { PostShift } from "@/interfaces/types";

export default function PostPrevBtn({ title, href }: PostShift) {
    return (
        <a href={href} className="float-left">
            <Button className="inline-flex text-left gap-5 rounded-md leading-normal pr-3 py-1.5 text-sm text-888">
                <ChevronLeftIcon className="w-5" />
                <ul>
                    <li>Prev</li>
                    <li className={title === undefined ? "text-888" : "text-white"}>
                        {title === undefined ? "이전 글이 없습니다" : title}
                    </li>
                </ul>
            </Button>
        </a>
    );
}

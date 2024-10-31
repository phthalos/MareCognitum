import { Button } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PostShift } from "@/interfaces/types";

export default function PostNextBtn({ title, href }: PostShift) {
    return (
        <a href={href} className="float-left">
            <Button className="inline-flex text-right gap-5 rounded-md leading-normal pl-3 py-1.5 text-sm text-888">
                <ul>
                    <li>Next</li>
                    <li className={title === undefined ? "text-888" : "text-white"}>
                        {title === undefined ? "다음 글이 없습니다" : title}
                    </li>
                </ul>
                <ChevronRightIcon className="w-5" />
            </Button>
        </a>
    );
}

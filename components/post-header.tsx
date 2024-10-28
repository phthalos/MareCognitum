import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { PostTitle } from "./post-title";
import DateFormatter from "./date-formatter";

type Props = {
    title: string;
    date: string;
};

export function PostHeader({ title, date }: Props) {
    return (
        <>
            <div className="flex mb-12 text-sm">
                <p>게임</p>
                <ChevronRightIcon className="w-5" />
                <p>마인크래프트</p>
            </div>
            <PostTitle>{title}</PostTitle>
            <DateFormatter dateString={date} />
        </>
    );
}

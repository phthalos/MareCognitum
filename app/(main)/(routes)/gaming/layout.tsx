import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const category = [
    { name: "마인크래프트", href: "/gaming/1", current: true },
    { name: "마리킨 온라인 4", href: "/gaming/2", current: false },
    { name: "테트리오", href: "/gaming/3", current: false },
    { name: "내가 하는 게임이 더 있나", href: "/gaming/4", current: false },
];

const onThisPage = [
    { name: "도적 스로네 2장 어머니편", current: true },
    { name: "ECMA International", current: false },
    { name: "ECMA 262", current: false },
    { name: "스크립트 언어", current: false },
    { name: "ECMAScript", current: false },
    { name: "JavaScript", current: false },
    { name: "A JavaScript Engine", current: false },
    { name: "Difference in Browser Performance", current: false },
];

export default function GamingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-row justify-center mt-9 mx-auto max-w-7xl lg:px-8">
            <ul className="flex flex-col w-64">
                {category.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={`${classNames(
                            item.current ? "text-white" : "text-888 hover:text-white",
                            "text-sm font-medium"
                        )}text-sm leading-none mb-6 flex justify-between`}
                    >
                        {item.name}
                        <ChevronRightIcon className="w-5" />
                    </a>
                ))}
            </ul>
            {children}
            <ul className="hidden md:flex flex-col w-64">
                <p className="text-sm leading-none mb-9">On This Page</p>
                {onThisPage.map((item) => (
                    <a
                        key={item.name}
                        aria-current={item.current ? "page" : undefined}
                        className={`${classNames(
                            item.current ? "text-white" : "text-888 hover:text-white",
                            " text-sm font-medium"
                        )}text-sm leading-none mb-6`}
                    >
                        {item.name}
                    </a>
                ))}
            </ul>
        </div>
    );
}

import logoKR from "@/public/logoKR.svg";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const menu = [
    { name: "들어가기", href: "#", current: false },
    { name: "이웃집 배너", href: "#", current: false },
    { name: "로그인", href: "#", current: false },
    { name: "회원가입", href: "#", current: false },
];

export default function Home() {
    return (
        <div className="flex h-screen w-screen items-center fixed">
            <div className="flex flex-col text-center m-auto">
                <div className="mb-6 flex">
                    <Image
                        className="drop-shadow-glow"
                        alt="Mare Cognitum"
                        src={logoKR}
                        width={362}
                        height={undefined}
                    />
                </div>
                <p className="mb-48 font-regular">느긋하게 굴러가는 게이머의 개인 홈페이지</p>
                <div className="flex flex-col">
                    {menu.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                            className={`${classNames(
                                item.current
                                    ? "text-white drop-shadow-glow group-first:block"
                                    : "text-888 hover:text-white hover:drop-shadow-glow",
                                "font-medium"
                            )}text-lg leading-none mb-8 flex justify-center group`}
                        >
                            <p className="hidden group-hover:block text-xs">◆</p>
                            <p className="mx-12 block">{item.name}</p>
                            <p className="hidden group-hover:block text-xs">◆</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

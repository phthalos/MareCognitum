import { GuestBookTypes } from "@/interfaces/types";

export default function GuestBookPost({ username, post, createdAt }: GuestBookTypes) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];

    const ms = new Date(createdAt);
    const time = new Date(createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    const year = ms.getFullYear();
    const monthIdx = ms.getUTCMonth();
    const date = ms.getDate();

    return (
        <>
            <div className="flex px-4 py-11 border-t border-333 w-full h-full">
                {/* 프사, 타래 표시 라인 */}
                <div className="items-center">
                    <div className="min-w-12 h-12 rounded-full bg-888"></div>
                    {/* <div className="w-[2px] bg-333 mt-2 h-3/4 m-auto" /> */}
                </div>
                {/* 닉네임, 작성시간, 본문 */}
                <div className="ml-3">
                    <ul className="flex mb-1">
                        <li>
                            <span className="text-base font-regular">
                                {username === "Anonymous" ? "익명의 모험가" : username}
                            </span>
                        </li>
                        <li>
                            <span className="text-sm text-888 ml-2">
                                · {time} · {month[monthIdx]} {date}, {year}
                                {/* · 1:30 PM · Oct 30, 2024 */}
                            </span>
                        </li>
                    </ul>
                    <p className="text-base leading-8">
                        {post}
                        {/* 이 글에, 제가 이해한 그대로의 JavaScript와 ECMAScript의 차이점을 소개하도록 하겠습니다.
                        마인크래프트 립버전 1.16.1다운 마인크래프트 립버전 1.16.1다운 있을 것 같았다. 그건 실로 벅찬
                        감격이었다.고마워요 스티브. 덕분에 마음이 아주 편해졌어요.고마워할 필요는 없어.알렉스는
                        미소지으며 손을 내밀었다. 스티브는 기쁜 얼굴로 악수를 */}
                    </p>
                </div>
            </div>
        </>
    );
}

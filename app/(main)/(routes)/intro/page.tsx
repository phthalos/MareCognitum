import Image from "next/image";
import cerublaz from "@/public/intro.png";
import AppBox from "@/components/appbox";
import WhiteBtn from "@/components/whiteBtn";
import TitleContainer from "@/components/title-container";
import IntroSubtitle from "@/components/intro-subtitle";

import twitter from "@/public/twitter.svg";
import youtube from "@/public/youtube.svg";

const status = [
    {
        name: "주력 장르 A:",
        content: "잠뜰 TV",
    },
    {
        name: "주력 장르 B:",
        content: "마리킨 온라인 4",
    },
    {
        name: "방문자 수:",
        content: "38 / 123,456",
    },
    {
        name: "홈페이지 운영기간:",
        content: "108720.4초",
    },
];

const apps = [
    {
        name: "twitter",
        src: { twitter },
    },
    {
        name: "youtube",
        src: { youtube },
    },
    {
        name: "github",
        src: "#",
    },
    {
        name: "cplusplus",
        src: "#",
    },
    {
        name: "react",
        src: "#",
    },
    {
        name: "none",
        src: "#",
    },
];

export default function Intro() {
    return (
        <TitleContainer>
            <div className="lg:flex gap-12">
                <div className="lg:w-md md:w-96 w-96">
                    <Image alt="cerublaz" src={cerublaz} width={undefined} height={undefined} className="mb-5" />
                    <p className="text-left text-sm font-regular leading-7">
                        게임과 전자기기를 좋아하는 엽록의 개인 홈페이지입니다.
                        <br /> 외부인 방문도 환영하니 편하게 둘러보세요.
                        <br /> 방명록 등 소통 관련 기능은 천천히 추가할 생각이 있긴 한데 유기할 수도 있음
                    </p>
                </div>
                <div className="lg:w-md md:w-96 w-96">
                    <div className="mb-8">
                        <IntroSubtitle>상태 정보</IntroSubtitle>
                        {status.map((value) => (
                            <div
                                key={value.name}
                                className="flex items-center justify-between font-regular text-white text-sm leading-8"
                            >
                                <p>{value.name}</p>
                                <p>{value.content}</p>
                            </div>
                        ))}
                    </div>
                    <IntroSubtitle>스킬</IntroSubtitle>
                    {apps.map((app) => (
                        <AppBox key={app.name}>
                            {app.name}
                            {/* <Image alt={app.name} src={`${app.src}`} width={32} height={32} /> */}
                        </AppBox>
                    ))}
                    <WhiteBtn>용도미정 버튼</WhiteBtn>
                </div>
            </div>
        </TitleContainer>
    );
}

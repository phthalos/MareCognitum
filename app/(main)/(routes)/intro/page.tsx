import Image from "next/image";
import cerublaz from "@/public/intro.png";
import AppBox from "@/components/appbox";
import WhiteBtn from "@/components/whiteBtn";
import TitleContainer from "@/components/title-container";
import IntroSubtitle from "@/components/intro-subtitle";
import { status, apps } from "@/interfaces/data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import Clock from "@/components/clock";

export default function Intro() {
    return (
        <TitleContainer>
            <div className="lg:flex gap-12">
                <div className="lg:w-md md:w-96 w-96">
                    <Image alt="cerublaz" src={cerublaz} width={undefined} height={undefined} className="mb-5" />
                    <p className="absolute text-[9px] text-333 font-mono lg:top-[35rem] top-[30rem] ml-32 h-4 overflow-y-auto text-right">
                        Cerublaz-5edc1f38-8f1b-419a-bc00-21f86519996e
                    </p>
                    <p className="text-left text-sm font-regular leading-7 lg:mb-0 mb-12 ">
                        게임과 전자기기를 좋아하는 엽록의 개인 홈페이지입니다.
                        <br /> 외부인 방문도 환영하니 편하게 둘러보세요.
                        <br /> 방명록 등 소통 관련 기능은 천천히 추가할 생각이 있긴 한데 유기할 수도 있음
                    </p>
                </div>
                <div className="lg:w-md md:w-96 w-96">
                    <div className="lg:mb-8 mb-12">
                        <IntroSubtitle>상태 정보</IntroSubtitle>
                        {status.map((value) => (
                            <div
                                key={value.name}
                                className="flex items-center justify-between font-regular text-white text-sm leading-8"
                            >
                                <p>{value.name}</p>
                                <a
                                    className="flex gap-2"
                                    href={typeof value.href == "string" ? value.href : undefined}
                                    target="_blank"
                                >
                                    {typeof value.name == "string" ? value.content : null}
                                    <span className={typeof value.content == "string" ? "hidden" : "block"}>
                                        <Clock />
                                    </span>
                                    <ArrowTopRightOnSquareIcon
                                        className={typeof value.href == "string" ? "block w-4" : "hidden"}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                    <IntroSubtitle>스킬</IntroSubtitle>
                    <div className="grid grid-cols-3 gap-5 m-auto items-center w-80 mb-12">
                        {apps.map((app) => (
                            <a key={app.name} href={typeof app.href == "string" ? app.href : undefined} target="_blank">
                                <AppBox>
                                    <Image alt={app.name} src={`/${app.name}.svg`} width={32} height={32} />
                                </AppBox>
                            </a>
                        ))}
                    </div>
                    <WhiteBtn>용도미정 버튼</WhiteBtn>
                </div>
            </div>
        </TitleContainer>
    );
}

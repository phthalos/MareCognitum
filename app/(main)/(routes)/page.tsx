import TitleContainer from "@/components/title-container";
import TitleMenu from "@/components/title-menu";
import logoKR from "@/public/logoKR.svg";
import Image from "next/image";

export default function Home() {
    return (
        <TitleContainer>
            <Image
                className="sticky -z-10 drop-shadow-glow mb-6 flex"
                alt="Mare Cognitum"
                src={logoKR}
                width={362}
                height={undefined}
            />
            <p className="mb-48 font-regular">느긋하게 굴러가는 게이머의 개인 홈페이지</p>
            <TitleMenu />
        </TitleContainer>
    );
}

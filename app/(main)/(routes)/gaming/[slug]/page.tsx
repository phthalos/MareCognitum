import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function GamingPost({ params }: { params: { slug: string } }) {
    // return <>GPOST : {params.slug} </>;
    return (
        <div className="lg:w-3/5 lg:px-12">
            <div className="flex mb-12 text-sm">
                <p>게임</p>
                <ChevronRightIcon className="w-5" />
                <p>마인크래프트</p>
            </div>
            <h1 className="mb-16">도적 스로네 2장 어머니편</h1>
            <p className="mb-12 leading-9 text-base">
                이 글에, 제가 이해한 그대로의 JavaScript와 ECMAScript의 차이점을 소개하도록 하겠습니다. 마인크래프트
                립버전 1.16.1다운 마인크래프트 립버전 1.16.1다운 있을 것 같았다. 그건 실로 벅찬 감격이었다.고마워요
                스티브. 덕분에 마음이 아주 편해졌어요.고마워할 필요는 없어.알렉스는 미소지으며 손을 내밀었다. 스티브는
                기쁜 얼굴로 악수를
            </p>
            <hr className="mb-12" />
            <h3 className="mb-9">ECMA International</h3>
            <p>기술의 표준을 정의하는 기구입니다.</p>
        </div>
    );
}

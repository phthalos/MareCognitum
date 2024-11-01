import { Children } from "@/interfaces/types";

// 가운데 정렬 컨테이너
// 스크롤이 필요한 페이지가 생기면 fixed를 따로 빼고 재사용해보자
const TitleContainer = ({ children }: Children) => {
    return (
        <div className="flex lg:h-screen h-auto w-screen items-center lg:p-0 py-28">
            <div className="text-center m-auto">{children}</div>
        </div>
    );
};

export default TitleContainer;

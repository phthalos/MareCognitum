import { Children } from "@/interfaces/types";

const PostContainer = ({ children }: Children) => {
    return <div className="lg:px-20 md:px-8 px-4 lg:max-w-screen-md md:max-w-screen-sm w-screen">{children}</div>;
};
export default PostContainer;

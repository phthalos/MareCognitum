type Props = {
    children?: React.ReactNode;
};

const PostContainer = ({ children }: Props) => {
    return <div className="lg:px-20 md:px-8 px-4 lg:max-w-screen-md md:max-w-screen-sm">{children}</div>;
};
export default PostContainer;

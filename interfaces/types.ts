export type Children = {
    children?: React.ReactNode;
};
export type Content = {
    content: string;
};
export type AlertType = {
    buttonName: string;
    dialogTitle: string;
    content: string;
    confirmBtnName: string;
    className: string;
};
export type Slugs = {
    params: {
        slug: string;
    };
};
export type PostShift = {
    idx: number | undefined;
    title: string | undefined;
    href: string | undefined;
};
export interface GuestBookTypes {
    id: string;
    post: string;
    userId: string;
    username: string;
    createdAt: number;
}

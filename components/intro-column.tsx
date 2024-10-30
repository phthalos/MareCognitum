import { Children } from "@/interfaces/types";

export default function IntroColumn({ children }: Children) {
    return <div className=" flex gap-14 ">{children}</div>;
}

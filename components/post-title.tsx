import { Children } from "@/interfaces/types";

export function PostTitle({ children }: Children) {
    return <h1 className="text-4xl font-semibold">{children}</h1>;
}

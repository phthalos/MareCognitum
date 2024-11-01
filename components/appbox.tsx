import { Children } from "@/interfaces/types";

export default function AppBox({ children }: Children) {
    return (
        <div className="flex justify-center items-center w-20 h-20 border border-white outline outline-1 outline-white -outline-offset-4">
            {children}
        </div>
    );
}

import { Children } from "@/interfaces/types";

export default function WhiteBtn({ children }: Children) {
    return (
        <button className="flex items-center w-60 h-12 bg-white p-4 text-black font-regular text-sm leading-none m-auto">
            <p className="mr-3">◆</p>
            {children}
        </button>
    );
}

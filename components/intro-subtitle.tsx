import { Children } from "@/interfaces/types";

export default function IntroSubtitle({ children }: Children) {
    return (
        <div className="flex h-9 p-5 mb-5 items-center border border-white font-regular text-white text-sm">
            {children}
        </div>
    );
}

import markdownStyles from "./markdown-styles.module.css";
import { Content } from "@/interfaces/types";

export function PostBody({ content }: Content) {
    return (
        <div className="">
            <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

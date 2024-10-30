import { menu } from "@/interfaces/data";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function TitleMenu() {
    return (
        <div className="flex flex-col">
            {menu.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`${classNames(
                        item.current
                            ? "text-white drop-shadow-glow group-first:block"
                            : "text-888 hover:text-white hover:drop-shadow-glow",
                        "font-medium"
                    )}text-lg leading-none mb-8 flex justify-center group`}
                >
                    <p className="hidden group-hover:block text-xs">◆</p>
                    <p className="mx-12 block">{item.name}</p>
                    <p className="hidden group-hover:block text-xs">◆</p>
                </a>
            ))}
        </div>
    );
}

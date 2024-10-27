import Link from "next/link";

export default function GamingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/gaming/1">Post 1</Link>
                </li>
                <li>
                    <Link href="/gaming/2">Post 2</Link>
                </li>
                <li>
                    <Link href="/gaming/3">Post 3</Link>
                </li>
            </ul>
            {children}
        </div>
    );
}

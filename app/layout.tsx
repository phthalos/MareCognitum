"use client";
import localFont from "next/font/local";
import "./globals.css";
import logoKR from "@/public/logoKR.svg";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { navigation } from "@/interfaces/data";
import { usePathname } from "next/navigation";
import Alert from "@/components/alert";

const pretendardLight = localFont({
    src: "/fonts/Pretendard-Light.woff",
    variable: "--font-pretendard-light",
    weight: "100 900",
});

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
    intro: React.ReactNode;
}>) {
    const pathname = decodeURI(usePathname()).split("/");
    return (
        <html>
            <body className={`${pretendardLight.variable}`}>
                <Disclosure as="nav" className="fixed w-screen backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Link href="/">
                                        <Image alt="Mare Cognitum" src={logoKR} width={undefined} height={undefined} />
                                    </Link>
                                </div>
                                <div className="hidden sm:block ">
                                    <div className="ml-9 flex items-baseline space-x-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? "page" : undefined}
                                                className={classNames(
                                                    `${
                                                        `/${pathname[1]}` == `${item.href}` ? "text-white" : "text-888"
                                                    } font-medium, hover:text-white`
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block font-regular">
                                <Alert
                                    buttonName="로그인"
                                    dialogTitle="준비중"
                                    content="준비중입니다"
                                    confirmBtnName="알겠어요"
                                    className="rounded-md bg-black/20 py-2 px-4 text-sm text-888 focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white hover:text-white"
                                />
                                <Alert
                                    buttonName="회원가입"
                                    dialogTitle="준비중"
                                    content="준비중입니다"
                                    confirmBtnName="알겠어요"
                                    className="rounded-md bg-white py-2 px-4 text-sm text-black focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white ml-2"
                                />
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? "page" : undefined}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

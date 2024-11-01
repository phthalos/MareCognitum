"use client";
import { Children } from "@/interfaces/types";
import db from "@/lib/firebasedb";
import { Button, Field, Fieldset, Textarea } from "@headlessui/react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import clsx from "clsx";

export default function GuestBookLayout({ children }: Children) {
    const [isLoading, setLoading] = useState(false);
    const [post, setPost] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading || post === "" || post.length > 300) return;
        try {
            setLoading(true);
            const docRef = await addDoc(collection(db, "guestbook"), {
                post,
                createdAt: Date.now(),
                username: "Anonymous",
            });
            setPost("");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col items-center px-8 py-28 mx-auto max-w-[50rem]">
            <form onSubmit={onSubmit} className="w-full">
                <Fieldset className="w-full">
                    <Field className="w-full">
                        <Textarea
                            className={clsx(
                                "block resize-none w-full h-full rounded-lg border-solid border border-333 bg-transparent px-7 py-4 text-base text-white leading-8 placeholder:text-888",
                                "focus:outline-none data-[focus]:outline-1 data-[focus]:-outline-offset-1 data-[focus]:outline-white/25"
                            )}
                            placeholder="비회원의 경우 등록한 글의 삭제가 불가능합니다. 신중히 작성 부탁드려요!"
                            required
                            rows={4}
                            maxLength={300}
                            onChange={onChange}
                            value={post}
                        />
                    </Field>
                    <Field className="flex items-center my-4 float-right gap-4">
                        <div className="relative size-7">
                            <svg
                                className="size-full -rotate-90 rounded-full"
                                viewBox="0 0 28 28"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* <!-- Background Circle --> */}
                                <circle
                                    cx="14"
                                    cy="14"
                                    r="12"
                                    fill="none"
                                    className="stroke-current text-333 dark:text-333"
                                    strokeWidth="3"
                                ></circle>
                                {/* <!-- Progress Circle --> */}
                                <circle
                                    cx="14"
                                    cy="14"
                                    r="12"
                                    fill="none"
                                    className="stroke-current text-white drop-shadow-glowsm"
                                    strokeWidth="3"
                                    strokeDasharray="100"
                                    strokeDashoffset={0.2333 * (300 - post.length) + 30}
                                    strokeLinecap="round"
                                ></circle>
                            </svg>
                        </div>
                        <Button
                            type="submit"
                            // value={isLoading ? "등록중..." : "등록하기"}
                            className="inline-flex items-center gap-2 rounded-md bg-white py-4 px-8 text-base leading-none font-regular text-333 drop-shadow-glow focus:outline-none data-[hover]:bg-white/80  data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        >
                            등록하기
                        </Button>
                    </Field>
                </Fieldset>
            </form>
            {children}
        </div>
    );
}

"use client";
import { GuestBookTypes } from "@/interfaces/types";
import db from "@/lib/firebasedb";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import GuestBookPost from "./guestbook-post";
import { Unsubscribe } from "firebase/database";

export default function GuestBookPosts() {
    const [posts, setPosts] = useState<GuestBookTypes[]>([]);

    useEffect(() => {
        let unsubscribe: Unsubscribe | null = null;
        const fetchPosts = async () => {
            const postsQuery = query(collection(db, "guestbook"), orderBy("createdAt", "desc"), limit(25));
            unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
                const posts = snapshot.docs.map((doc) => {
                    const { post, createdAt, userId, username } = doc.data();
                    return {
                        post,
                        createdAt,
                        userId,
                        username,
                        id: doc.id,
                    };
                });
                setPosts(posts);
            });
            // const snapshot = await getDocs(postsQuery);
        };
        fetchPosts();
    }, []);

    return (
        <>
            {posts.map((post) => (
                <GuestBookPost key={post.id} {...post} />
            ))}
        </>
    );
}

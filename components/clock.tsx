"use client";
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState("");
    useEffect(() => {
        setInterval(() => {
            const from = new Date("2024-10-26");
            const now = new Date();
            const ft = from.getTime();
            const nt = now.getTime();

            const current = ` ${Math.floor((nt - ft) / 1000)} 초`;
            setTime(current);
        }, 1000);
    }, []);
    return <>{time}</>;
}

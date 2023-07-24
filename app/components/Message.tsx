"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface MessageProps {
    role: string;
    content: string;
    isLoading: boolean;
}

const Message: React.FC<MessageProps> = ({ role, content, isLoading }) => {
    const { data: session } = useSession();
    const email = session?.user?.email;

    return (
        <>
            {role === "user" ? (
                <div className="p-4 flex gap-5 items-start">
                    <Image
                        src={session?.user?.image as string}
                        priority={true}
                        width={40}
                        height={40}
                        alt="User:"
                        className="rounded inline"
                    />

                    <div className="pt-1">{content}</div>
                </div>
            ) : (
                <div className="bg-[#444654] h-fit p-4 flex gap-5 items-start">
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebotorig_ymxuzb.webp"
                        priority={true}
                        width={40}
                        height={40}
                        alt="gaterebot: "
                        cla
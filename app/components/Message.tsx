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
   
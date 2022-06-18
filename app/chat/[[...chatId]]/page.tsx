"use client";

import { FormEvent } from "react";
import ChatSidebar from "@/app/components/ChatSidebar";
import { IoSend } from "react-icons/io5";
import { useChat } from "ai/react";
import Message from "@/app/components/Message";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
    const { data: session } = useSession();
    const user = session?.user;
    const email = user?.email;
    const bottomRef = useRef<HTMLDivElement>(null);

    const { messages, input, handleInputChange, handleSubmit, isLoading } =
        useChat();
    // console.log("Messages:", messages);
    // const [prompt, ai] = messages;
    // console.log("Prompt:", prompt?.content);
    // messages.map((m) => console.log("new content:", m.content));
    // console.log("AI:", ai?.content);
    // const userData = prompt?.content + "\n" + ai?.content;
    // console.log("User Data:", userData);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [messages]);

    const mongoHandleSubmit = async () => {
        try {
            // console.log("Sending data:", {
            //     email: email,
            //     title: input,
            //     messages: messages,
            // });

            const response = await fetch("/api/chat/createNewChat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    title: input,
                    messages: messages,
                }),
            });

            const json = await response.json();
            // console.log("Response:", json);
        } catch (error) {
            console.error("Error submitting
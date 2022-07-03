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
            console.error("Error submitting the chat:", error);
        }
    };

    // setTimeout(() => {
    //     mongoHandleSubmit();
    // }, 10000);
    // setTimeout(mongoHandleSubmit, 10000);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const syntheticEvent = e as unknown as FormEvent<HTMLFormElement>;
            // Submit the form
            // handleSubmit(syntheticEvent);
            finalSubmit(e);
        }
    };
    const finalSubmit = (e: any) => {
        e.preventDefault();
        handleSubmit(e);
        mongoHandleSubmit();
    };
    // console.log(messages);
    // console.log("Messages:", messages[0]?.content);
    // console.log("Input:", input);

    return (
        <>
            <title>New Chat</title>

            <div className="flex h-screen">
                <ChatSidebar />
                <div className="bg-[#343541] flex flex-1 flex-col overflow-hidden">
                    {!messages.length && !isLoading && (
                        <div className="m-auto h-scree
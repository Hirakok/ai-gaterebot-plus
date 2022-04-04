
import Chat from "@/models/chat";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    try {
        const body = await req.json();
        const chatData = body;
        // console.log(chatData);

        await Chat.create(chatData);
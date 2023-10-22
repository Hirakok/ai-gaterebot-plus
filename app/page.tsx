"use client";

import Image from "next/image";
import { Toaster, toast } from "sonner";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        toast.success(
            `Welcome ${
                session?.user?.name ? session?.user?.name : session?.user?.email
            }!`
        );
    }

    // console.log(session?.user);
    // console.log(session?.user?.name ?? "No user found");

    return (
        <div
            className="bg-[#050816] h-screen bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dvuazircp/image/upload/v1700070833/new_portfolio/herobg_lbcdc4.webp')`,
            }}
        >
            <Toaster richColors
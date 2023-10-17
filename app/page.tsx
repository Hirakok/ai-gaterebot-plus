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

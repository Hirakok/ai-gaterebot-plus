
"use client";

import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import ReactTyped from "react-typed";

const Signin = () => {
    const [providers, setProviders] = useState<Record<string, any> | null>(
        null
    );
    // const router = useRouter();

    useEffect(() => {
        const fetchProviders = async () => {
            const providers = await getProviders();
            // Handle providers data as needed
            // console.log(providers);
            setProviders(providers as Record<string, any> | null);
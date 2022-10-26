"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import classNames from "classnames";
// import { IoChevronBackSharp } from "react-icons/io5";

const ChatSidebar = () => {
    const { data: session } = useSession();
    const [chatList, setChatList] = useState([]);
    const [openSidebar, setOpenSidebar] = useState(true);
    const [filteredData, setFilteredData] = useState([])

    const user = session?.user;
    const email = user?.email;
    // console.log("email: ", email);

    // const params = new URLSearchParams({ email: email ?? '' });
    // console.log("params")

    useEffect(() => {
        const getChats = async () => {
            try {
                const response = await fetch(`/api/chat/getChats`, {
                    method: "GET",
                    headers: {
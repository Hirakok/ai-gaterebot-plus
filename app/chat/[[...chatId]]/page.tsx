"use client";

import { FormEvent } from "react";
import ChatSidebar from "@/app/components/ChatSidebar";
import { IoSend } from "react-icons/io5";
import { useChat } from "ai/react";
import Message from "@/app/components/Message";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Hom
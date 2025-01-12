
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "gaterebot",
    description:
        "gaterebot is an innovative chat application powered by ChatGPT through the OpenAI API.",
    openGraph: {
        images: [
            {
                url: "https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebot_ul4hei.webp",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head> */}
            <body className={roboto.className}>
                <AuthProvider> {children}</AuthProvider>
            </body>
        </html>
    );
}
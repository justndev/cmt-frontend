'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/parts/Header";
import Footer from "@/components/parts/Footer";
import { ThemeProvider } from "@mui/material";
import {theme} from "@/hooks/theme";
import React from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    // Define routes where Header/Footer should be hidden
    const hideLayout = pathname?.startsWith("/management");

    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider theme={theme}>
            {!hideLayout && <Header />}
            <main>{children}</main>
            {!hideLayout && <Footer />}
        </ThemeProvider>
        </body>
        </html>
    );
}

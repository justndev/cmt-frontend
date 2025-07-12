'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {Provider} from 'react-redux';
import Header from "@/components/parts/Header";
import Footer from "@/components/parts/Footer";
import { ThemeProvider } from "@mui/material";
import {theme} from "@/hooks/theme";
import React from "react";
import { usePathname } from "next/navigation";
import { store, persistor} from "@/utils/redux/store";
import {PersistGate} from "redux-persist/integration/react";

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

    const hideLayout = pathname?.startsWith("/management");

    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {!hideLayout && <Header />}
                    <main>{children}</main>
                    {!hideLayout && <Footer />}
                </PersistGate>
            </Provider>
        </ThemeProvider>
        </body>
        </html>
    );
}

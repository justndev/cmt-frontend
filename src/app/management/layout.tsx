'use client';

import React from "react";

import "@/app/globals.css";
import { ThemeProvider } from "@mui/material";
import {theme} from "@/hooks/theme";
import LeftSidebar from "@/components/parts/LeftSidebar";
import ManagementHeader from "@/components/parts/ManagementHeader";


export default function ManagementLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {

    return (
        <ThemeProvider theme={theme}>
            <div className="flex h-screen">
                    <LeftSidebar />
                <div className="w-full flex flex-col">
                        <ManagementHeader />
                    <main className="flex w-full h-full overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}

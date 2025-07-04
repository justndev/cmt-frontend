'use client';

import React from "react";

import "@/app/globals.css";
import { ThemeProvider } from "@mui/material";
import {theme} from "@/hooks/theme";
import UnderlinedButtonDark from "@/components/buttons/underlinedButtonDark/UnderlinedButtonDark";

export default function MyCampaignLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <div className="flex flex-col items-center justify-start w-full h-full  bg-white p-4">
            <section className='flex items-center justify-start w-full pb-3 mb-4 border-b-3 border-[#E4E4E4]'>
                <UnderlinedButtonDark selected={true}>
                    My campaigns
                </UnderlinedButtonDark>
                <UnderlinedButtonDark>
                    Start new campaign
                </UnderlinedButtonDark>
            </section>
                {children}
        </div>;
        </ThemeProvider>
        </body>
        </html>
    );
}

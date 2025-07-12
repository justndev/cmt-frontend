'use client';

import React from "react";

import "@/app/globals.css";
import { ThemeProvider } from "@mui/material";
import {theme} from "@/hooks/theme";
import UnderlinedButtonDark from "@/components/buttons/underlinedButtonDark/UnderlinedButtonDark";
import {usePathname, useRouter} from "next/navigation";


export default function MyCampaignLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col items-center justify-start w-full h-full  bg-white p-4">
            <section className='flex items-center justify-start w-full pb-3 border-b-3 border-[#E4E4E4]'>
                <UnderlinedButtonDark selected={pathname != '/management/my-campaigns/start-new'} onClick={()=>router.push('/management/my-campaigns/')}>
                    My campaigns
                </UnderlinedButtonDark>
                <UnderlinedButtonDark selected={pathname?.startsWith('/management/my-campaigns/start-new')} onClick={()=>router.push('/management/my-campaigns/start-new')}>
                    Start new campaign
                </UnderlinedButtonDark>
            </section>
                {children}
        </div>;
        </ThemeProvider>
    );
}

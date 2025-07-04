'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Placement } from "@/constants/types";
import CampaignInfoCard from "@/components/cards/CampaignInfoCard";
import PayoutsTable from "@/components/tables/PayoutsTable";
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "@/hooks/theme";

interface Campaign {
    id: number;
    title: string;
    url: string;
    placements: Placement[];
    isActive: boolean;
    currentPayoutInEUR: number;
}

const dummyCampaigns: Campaign[] = [
    {
        id: 1,
        title: "TempChat",
        url: "https://tempchat.xyz",
        isActive: true,
        currentPayoutInEUR: 88.4,
        placements: [
            { id: 1, provider: "Meta", country: "India", IMPpriceInEur: 0.4 },
            { id: 2, provider: "Google", country: "USA", IMPpriceInEur: 4 },
        ],
    },
    {
        id: 2,
        title: "ShopX",
        url: "https://shopx.io",
        isActive: false,
        currentPayoutInEUR: 12.0,
        placements: [],
    },
];

export default function CampaignPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [campaign, setCampaign] = useState<Campaign | null>(null);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        const id = Number(params.id);
        const found = dummyCampaigns.find(c => c.id === id);
        if (!found) {
            router.push('/my-campaigns'); // redirect if not found
        } else {
            setCampaign(found);
            setTitle(found.title);
            setUrl(found.url);
        }
    }, [params.id, router]);

    const handleSave = () => {
        if (!campaign) return;
        const updated = { ...campaign, title, url };
        // Normally you'd send a PUT or PATCH request here
        alert("Campaign updated:\n" + JSON.stringify(updated, null, 2));
    };

    const handleDelete = () => {
        if (!campaign) return;
        // Normally you'd send a DELETE request here
        alert(`Campaign ${campaign.title} deleted.`);
        router.push('/my-campaigns');
    };

    if (!campaign) return null;

    return (
        <div className="flex flex-col items-center justify-start w-full h-full p-4 space-y-6">
            <h1 className="text-2xl font-semibold text-[#333333]">{campaign.title}</h1>
            <div className='flex justify-start w-full'>
                <h2 className='text-xl font-semibold text-[#333333]'>Information</h2>
            </div>


            <CampaignInfoCard
                title={campaign.title}
                url={campaign.url}
                isActive={campaign.isActive}
            />
            <div className='flex justify-start w-full'>
                <h2 className='text-xl font-semibold text-[#333333]'>Payouts:</h2>
            </div>
            <ThemeProvider theme={darkTheme}>
                <PayoutsTable />

            </ThemeProvider>



        </div>
    );
}

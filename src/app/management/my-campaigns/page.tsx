'use client';

import CampaignCard from "@/components/cards/CampaignCard";

export default function MyCampaignsPage() {
    return <div className="flex flex-col items-center justify-start w-full h-full space-y-4">
        <h1 className='text-2xl font-semibold text-[#333333]'>My Campaigns</h1>
        <CampaignCard title={"TempChat"} url={"tempchat.xyz"} placements={[
            {
                provider: "Meta",
                country: "India",
                IMPpriceInEur: 0.4,
                id: 0
            },
            {
                provider: "Google",
                country: "USA",
                IMPpriceInEur: 4,
                id: 1
            }

        ]} isActive={true} currentPayoutInEUR={88.4}/>
        <CampaignCard title={"TempChat"} url={"tempchat.xyz"} placements={[
            {
                provider: "Meta",
                country: "India",
                IMPpriceInEur: 0.4,
                id: 0
            },
            {
                provider: "Google",
                country: "USA",
                IMPpriceInEur: 4,
                id: 1
            }

        ]} isActive={true} currentPayoutInEUR={88.4}/>
        <CampaignCard title={"TempChat"} url={"tempchat.xyz"} placements={[
            {
                provider: "Meta",
                country: "India",
                IMPpriceInEur: 0.4,
                id: 0
            },
            {
                provider: "Google",
                country: "USA",
                IMPpriceInEur: 4,
                id: 1
            }

        ]} isActive={true} currentPayoutInEUR={88.4}/>
        <CampaignCard title={"TempChat"} url={"tempchat.xyz"} placements={[
            {
                provider: "Meta",
                country: "India",
                IMPpriceInEur: 0.4,
                id: 0
            },
            {
                provider: "Google",
                country: "USA",
                IMPpriceInEur: 4,
                id: 1
            }

        ]} isActive={true} currentPayoutInEUR={88.4}/>
    </div>;
}

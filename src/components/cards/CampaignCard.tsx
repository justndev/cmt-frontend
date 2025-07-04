import React from "react";
import {Placement} from "@/constants/types";

interface CampaignCardProps {
    title: string;
    url: string;
    placements: Placement[];
    isActive: boolean;
    currentPayoutInEUR: number;
}

const CampaignCard = (props: CampaignCardProps) => {
    const Placements = () => {
        return (
            <div className="w-[40%] flex flex-col">
                {props.placements.map((item: Placement, index: number) => (
                    <div key={index} className="flex justify-between w-full">
                        <div className="flex items-center justify-center w-full">
                            <span>{item.country}, {item.provider}</span>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <span className='text-[#EBFF08]'>{item.IMPpriceInEur}€</span>
                            <span> / 1k IMP</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full flex justify-center bg-[#333333] text-white font-semibold p-6 rounded-sm shadow-md gap-6">
            {/* Title */}
            <div className="flex items-center justify-center w-[20%]">
                <div className="flex flex-col items-start justify-start">
                    <a>{props.title}</a>
                </div>
            </div>

            {/* URL */}
            <div className="flex items-center justify-center w-[20%]">
                <div className="flex flex-col items-start justify-start">
                    <a>{props.url}</a>
                </div>
            </div>

            {/* Placements */}

                    <Placements />


            {/* Status + Payout */}
            <div className="flex items-center justify-center w-[20%]">
                <div className="flex flex-col items-start justify-start">
                    <a className={props.isActive ? 'text-[#62FF42]' : 'text-[#A10003]'}>
                        {props.isActive ? 'Active' : 'Inactive'}
                    </a>
                    <div>
                        <a className="text-[#B6B6B6]">To pay: </a>
                        <a className="text-[#EBFF08]">{props.currentPayoutInEUR}€</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;

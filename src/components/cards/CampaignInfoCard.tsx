'use client'

import React from "react";
import {Switch} from "@mui/material";

interface CampaignInfoCardProps {
    title: string,
    url: string,
    isActive: boolean,
    checked: boolean,
    toggleChecked: () => void,
}

const CampaignInfoCard = (props: CampaignInfoCardProps) => {
    return (
        <div className="w-full flex justify-center bg-[#333333] text-white font-semibold p-6 rounded-sm shadow-md gap-6">
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-startjustify-start">
                    <a className='text-[#B6B6B6]'>Title</a>
                    <a>{props.title}</a>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-startjustify-start">
                    <a className='text-[#B6B6B6]'>URL</a>
                    <a>{props.url}</a>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-startjustify-start">
                    <a className='text-[#B6B6B6]'>Status</a>
                    <div className="flex justify-center items-center">
                        {props.checked ?
                            <a className='text-[#62FF42]'>Active</a>
                            :
                            <a className='text-[#A10003]'>Inactive</a>
                        }

                        <div className={'cursor-pointer'} onClick={props.toggleChecked}>
                            <Switch
                                checked={props.checked}
                                color={'yellow'}
                                style={{ pointerEvents: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignInfoCard;

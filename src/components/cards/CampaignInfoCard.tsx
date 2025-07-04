import React, {useState} from "react";
import {Switch} from "@mui/material";

interface CampaignInfoCardProps {
    title: string,
    url: string,
    isActive: boolean,
}

const CampaignInfoCard = (props: CampaignInfoCardProps) => {
    const [checked, setChecked] = useState(false);

    return (
        <div
            className="w-full flex justify-center bg-[#333333] text-white font-semibold p-6 rounded-sm shadow-md gap-6">
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
                        {props.isActive ?
                            <a className='text-[#62FF42]'>Active</a>
                            :
                            <a className='text-[#A10003]'>Inactive</a>
                        }
                        <Switch
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            color={'yellow'}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CampaignInfoCard;

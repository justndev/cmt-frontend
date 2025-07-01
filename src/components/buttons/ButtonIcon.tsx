'use client';

import {IconButton} from "@mui/material";
import CustomIcon from "@/components/CustomIcon";

interface ButtonIconProps {
    icon: string;
    onClick?: () => void;
    size?: number;
}

const ButtonIcon = ({icon, onClick, size = 30}: ButtonIconProps) => {

    return (
        <IconButton onClick={onClick} >
            <CustomIcon icon={icon} size={size}/>
        </IconButton>
    )
}

export default ButtonIcon;

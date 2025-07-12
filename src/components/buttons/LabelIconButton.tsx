'use client';

import React from 'react';
import Button from '@mui/material/Button';

interface LabelIconButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
    isDisabled?: boolean;
    color?: 'primary' | 'error';
    size?: 'small' | 'medium' | 'large';
    isMobile?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
}


const LabelIconButton = ({
                                 label,
                                 iconSrc,
                                 onClick = () => {},
                                 isDisabled = false,
                                 color = 'primary',
                                 size,
                                 isMobile = false,
                                 variant = 'contained',
                             }: LabelIconButtonProps) => {
    const resolvedSize = size ? size : isMobile ? 'small' : 'medium';

    return (
        <Button
            variant={variant}
            color={color}
            size={resolvedSize}
            onClick={onClick}
            disabled={isDisabled}
            sx={{ width: '100%', justifyContent: 'space-between', paddingRight: 2 }}
            endIcon={<img src={iconSrc} alt="icon" style={{ width: 20, height: 20 }} />}
        >
            {label}
        </Button>
    );
};

export default LabelIconButton;

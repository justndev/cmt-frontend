'use client';

import React from 'react';
import Button from '@mui/material/Button';


interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    isMobile?: boolean;
    color?: string;
}

const FilledButton = ({
                          children = null,
                          onClick = () => {},
                          size,
                          isMobile = false,
                            color = '',
                      }: CustomButtonProps) => {
    const resolvedSize = size ? size : isMobile ? 'small' : 'medium';

    return (
        <Button
            size={resolvedSize}
            variant="contained"
            color={color ? color : 'yellow'}
            sx={{ width: '100%', fontWeight: 'bold', textTransform: 'none', borderRadius: 2 }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default FilledButton;

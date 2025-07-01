'use client';

import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
    children: React.ReactNode;
    isDisabled?: boolean;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    isMobile?: boolean;
}

const FilledButton = ({
                          children = null,
                          isDisabled = false,
                          onClick = () => {},
                          size,
                          isMobile = false,
                      }: CustomButtonProps) => {
    const resolvedSize = size ? size : isMobile ? 'small' : 'medium';

    return (
        <Button
            size={resolvedSize}
            variant="contained"
            color="yellow"
            sx={{ width: '100%', fontWeight: 'bold', textTransform: 'none', borderRadius: 2 }}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </Button>
    );
};

export default FilledButton;

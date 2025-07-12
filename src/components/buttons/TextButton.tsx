'use client'

import React from "react";

interface TextButtonProps {
    onClick?: () => void;
    sx?: string;
    color?: string;
    children: React.ReactNode;
}

export default function TextButton({
                                       children = null,
                                       color = "white",
                                       onClick = () => {},
                                       sx = "",
                                   }: TextButtonProps) {
    return (
        <div
            className={`cursor-pointer font-semibold px-4 py-2 rounded text-sm transition-colors duration-200 ${sx}`}
            onClick={onClick}
            style={{color: color}}
        >
            {children}
        </div>
    );
}

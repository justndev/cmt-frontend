'use client';

import React from "react";
import Image from "next/image";

interface SidebarButtonProps {
    iconSrc: string;
    children: string;
    selected?: boolean;
    onClick?: () => void;
    alt: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
                                                         iconSrc,
                                                         children,
                                                         selected = false,
                                                         onClick,
                                                         alt,
                                                     }) => {
    const baseStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "0.5rem 1rem",
        backgroundColor: selected ? "#353434" : "#272626", // bg-gray-700 or bg-gray-800
        borderRight: selected ? "4px solid #EBFF08" : "4px solid transparent", // yellow-400
        textAlign: "left",
        color: '#D9D9D9',
        fontWeight: 600,
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
    };

    const hoverStyle: React.CSSProperties = {
        backgroundColor: "#353434", // bg-gray-700 on hover
    };

    return (
        <button
            onClick={onClick}
            style={baseStyle}
            onMouseEnter={(e) => {
                if (!selected) e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor!;
            }}
            onMouseLeave={(e) => {
                if (!selected) e.currentTarget.style.backgroundColor = "#272626"; // revert to bg-gray-800
            }}
        >
            <Image
                src={iconSrc}
                alt={alt}
                width={20}
                height={20}
                style={{ marginRight: "0.75rem" }} // mr-3
            />
            <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{children}</span>
        </button>
    );
};

export default SidebarButton;

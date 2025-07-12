'use client'

import './styles.css'
import React from "react";


interface UnderlinedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    selected?: boolean;
}

const UnderlinedButton = ({ children, onClick, selected = false }: UnderlinedButtonProps): React.JSX.Element => {


    return (
        <div className="underlined-button-container">
            <button
                className={`underlined-button ${selected ? 'selected' : ''}`}
                onClick={onClick}
            >
                {children}
            </button>
            <div className={`underline ${selected ? 'selected' : ''}`} />
        </div>
    )
}

export default UnderlinedButton;

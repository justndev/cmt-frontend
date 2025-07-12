'use client'

import './styles.css'
import React from "react";


interface UnderlinedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    selected?: boolean;
}

const UnderlinedButtonDark = ({ children, onClick, selected = false }: UnderlinedButtonProps): React.JSX.Element => {
    return (
        <div className="underlined-dark-button-container">
            <button
                className={`underlined-dark-button ${selected ? 'selected' : ''}`}
                onClick={onClick}
            >
                {children}
            </button>
            <div className={`underline-dark ${selected ? 'selected' : ''}`} />
        </div>
    )
}

export default UnderlinedButtonDark;

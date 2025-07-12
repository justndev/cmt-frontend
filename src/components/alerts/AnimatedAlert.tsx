'use client'

import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Alert } from "@mui/material";


interface AnimatedAlertProps {
    isVisible?: boolean;
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const AnimatedAlert = ({
                           isVisible = true,
                           message = "Unexpected error",
                           type = 'success',
                           onClose
                       }: AnimatedAlertProps) => {
    const [visible, setVisible] = useState(isVisible);

    const styles = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(6%)'
        },
        to: {
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0%)' : 'translateY(6%)'
        },
        config: {
            tension: 280,
            friction: 20
        }
    });

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(() => {
                    onClose?.();
                }, 300);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);


    if (!visible && !isVisible) return null;

    return (
        <animated.div
            style={styles}
            className={`absolute bottom-[-55] min-w-[200px]`}
        >
            <Alert variant="filled" severity={type}>
                {message}
            </Alert>
        </animated.div>
    );
};

export default AnimatedAlert;

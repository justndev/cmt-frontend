'use client'

import React from "react";
import TextButton from "@/components/buttons/TextButton";
import {COLORS} from "@/utils/constants/colors";
import {useRouter} from "next/navigation";

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="relative">
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-32"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#1e1e1e"
                        d="M0,320L0,200L200,80L360,160L500,40L720,120L900,20L1140,100L1440,60L1440,320Z"
                    />
                    <path
                        fill="#272626"
                        fillOpacity="0.8"
                        d="M0,320L0,240L150,140L320,200L480,100L680,180L880,80L1080,150L1280,100L1440,140L1440,320Z"
                    />
                </svg>
            </div>

            <div style={footerStyles}>
                <TextButton color={COLORS.yellow}>ndev</TextButton>
                <section className="text-center flex">
                    <TextButton onClick={()=>router.push('/privacy-policy')}>Privacy Policy</TextButton>
                    <TextButton onClick={()=>router.push('/terms')}>Terms and Conditions</TextButton>
                </section>

            </div>
        </footer>
    );
};

const footerStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
};

export default Footer;

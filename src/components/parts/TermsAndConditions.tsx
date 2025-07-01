'use client';

import React from "react";
import Checkbox from "@/components/inputs/checkbox/Checkbox";
import Txt from "@/components/typography/Txt";
import Link from "next/link";

const TermsAndConditionsElement = ({
                                       onChange,
                                       state,
                                   }: {
    onChange: () => void;
    state: boolean;
}) => {
    return (
        <div className="flex flex-row items-center gap-5 pt-4">
            <Checkbox state={state} setState={() => onChange()} />
            <div>
                <Txt>
                    I have read and understand{" "}
                    <Link href="/terms-of-use" passHref>
            <span className="text-blue-500 underline hover:text-blue-700">
              Terms of Use
            </span>
                    </Link>
                </Txt>
            </div>
        </div>
    );
};

export default TermsAndConditionsElement;

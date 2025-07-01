'use client';

import * as React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import FilledButton from "@/components/buttons/FilledButton";
import UnderlinedButton from "@/components/buttons/underlinedButton/UnderlinedButton";
import {COLORS} from "@/constants/colors";

const Header = () => {

    const headerStyle: any = {
        padding: '10px',
        backgroundColor: COLORS.darkGrey,
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };


    return (
        <header style={headerStyle}>
           <section className={'w-[50%] flex items-center justify-center gap-10'}>
                <UnderlinedButton onClick={()=>{}}>
                    CONTACTS
                </UnderlinedButton>
               <UnderlinedButton onClick={()=>{}}>
                    FAQ
               </UnderlinedButton>
               <UnderlinedButton onClick={()=>{}}>
                    HOME
               </UnderlinedButton>
           </section>
            <section className={'w-[50%] flex items-center justify-end gap-5'}>
                <div>
                    <OutlinedButton>
                        Log in
                    </OutlinedButton>
                </div>
                <div>
                    <FilledButton>
                        Sign up
                    </FilledButton>
                </div>
            </section>
        </header>
    )
}



export default Header;

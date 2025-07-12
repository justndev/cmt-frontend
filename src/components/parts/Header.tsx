'use client';

import * as React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import FilledButton from "@/components/buttons/FilledButton";
import UnderlinedButton from "@/components/buttons/underlinedButton/UnderlinedButton";
import {COLORS} from "@/utils/constants/colors";
import {usePathname, useRouter} from "next/navigation";


const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    const headerStyle: any = {
        padding: '10px',
        backgroundColor: COLORS.darkGrey,
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        minHeight: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        paddingRight: '20px'
    };

    return (
        <header style={headerStyle}>
           <section className={'w-[50%] flex items-center justify-center gap-10'}>
                <UnderlinedButton onClick={()=>router.push('/contacts')} selected={pathname == "/contacts"}>
                    CONTACTS
                </UnderlinedButton>
               <UnderlinedButton onClick={()=>router.push('/faq')} selected={pathname == "/faq"}>
                    FAQ
               </UnderlinedButton>
               <UnderlinedButton onClick={()=>router.push('/')} selected={pathname == ""}>
                    HOME
               </UnderlinedButton>
           </section>

            <section className={'w-[50%] flex items-center justify-end gap-5'}>
                <div>
                    <OutlinedButton onClick={()=>router.push('/login')}>
                        Log in
                    </OutlinedButton>
                </div>
                <div>
                    <FilledButton onClick={()=>router.push('/signup')}>
                        Sign up
                    </FilledButton>
                </div>
            </section>
        </header>
    )
}

export default Header;

'use client'

import CustomIcon from "@/components/CustomIcon";
import {ICONS} from "@/utils/constants/icons";
import SidebarButton from "@/components/buttons/SidebarButton";
import {usePathname, useRouter} from "next/navigation";


const LeftSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="w-50 bg-[#272626] h-screen gap-5">
            <section className="flex gap-2 p-2">
                <CustomIcon icon={ICONS.logo}/>
                <h1 className={'font-bold text-[#EBFF08] text-3xl'}>My CMT</h1>
            </section>

            <a className={'font-[600] text-white p-4'}>GENERAL</a>

            <SidebarButton
                onClick={() => router.push('/management/my-campaigns')}
                iconSrc={ICONS.campaign}
                label="My Campaigns"
                selected={pathname?.startsWith("/management/my-campaigns")}
                alt="my campaigns icon"
            >
                My campaigns
            </SidebarButton>

            <SidebarButton
                onClick={() => router.push('/management/my-statistics')}
                iconSrc={ICONS.chart}
                label="My Campaigns"
                selected={pathname?.startsWith("/management/my-statistics")}
                alt="my campaigns icon"
            >
                My statistics
            </SidebarButton>
        </nav>)
};
export default LeftSidebar;

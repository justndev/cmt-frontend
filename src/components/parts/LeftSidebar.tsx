import CustomIcon from "@/components/CustomIcon";
import {ICONS} from "@/constants/icons";
import SidebarButton from "@/components/buttons/SidebarButton";

const LeftSidebar = () => (
    <aside className="w-50 bg-[#272626] h-screen">
        <nav>
            <ul >
                <section className="flex gap-2">
                    <CustomIcon icon={ICONS.logo}/>
                    <h1 className={'font-bold text-[#EBFF08] text-3xl'}>My CMT</h1>
                </section>
                <a className={'font-[600] text-white'}>GENERAL</a>
                <SidebarButton
                    iconSrc={ICONS.campaign}
                    label="My Campaigns"
                    selected={true}
                    alt="my campaigns icon"
                >
                    My campaigns
                </SidebarButton>
                <SidebarButton
                    iconSrc={ICONS.chart}
                    label="My Campaigns"
                    selected={false}
                    alt="my campaigns icon"
                >
                    My statistics
                </SidebarButton>
            </ul>
        </nav>
    </aside>
);
export default LeftSidebar;

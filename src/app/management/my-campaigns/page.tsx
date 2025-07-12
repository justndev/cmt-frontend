'use client';

import CampaignCard from "@/components/cards/CampaignCard";
import withPrivateRoute from "@/utils/WithPrivateRoute";
import {useEffect, useState} from "react";
import {fetchCampaigns} from "@/api/cmt";
import {Campaign} from "@/utils/constants/types";
import {CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "@/utils/redux/store";
import SearchBar from "@/components/inputs/SearchBar";
import {useDebounce} from "use-debounce";


export default withPrivateRoute(MyCampaignsPage);

function MyCampaignsPage() {
    const user = useSelector((state: RootState) => state.user);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<'all' | 'running' | 'paused'>("all");

    const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            const isRunning = statusFilter === 'all' ? undefined : statusFilter === 'running';
            const response = await fetchCampaigns(user.jwt, debouncedSearchTerm, isRunning);
            setCampaigns(response);
            setLoading(false);
        }

        fetch();
    }, [debouncedSearchTerm, statusFilter]);

    function handleSearchChange(term: string) {
        setSearchTerm(term);
    }

    function getToPay(campaign: Campaign) {
        let amount = 0
        campaign.payouts.forEach((payout) => {
            amount += payout.to_pay_in_eur
        })
        return amount
    }

    return <div className="flex flex-col items-center justify-start w-full h-full px-4 gap-8 overflow-y-scroll">
        <h1 className='text-2xl font-semibold text-[#333333] mt-4'>My campaigns</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} statusFilter={statusFilter}
                   onStatusFilterChange={(status: string) => setStatusFilter(status)}/>
        {loading ?
            <CircularProgress/>
            :
            <>
                {campaigns.map((c: Campaign) => <CampaignCard key={c.id} id={c.id} title={c.title} url={c.url}
                                                              placements={c.placements} isActive={c.is_active}
                                                              getToPay={() => getToPay(c)}/>)}
            </>
        }
    </div>
}

import axios from "axios";
import { BACKEND_URL } from "@/config";
import { Campaign, Placement } from "@/utils/constants/types";


export async function fetchPlacements(token: string): Promise<Placement[]> {
    const res = await axios.get(`${BACKEND_URL}/cmt/placements`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return res.data;
}

export async function fetchCampaignById(campaign_id: number, token: string): Promise<Campaign> {
    const res = await axios.get(`${BACKEND_URL}/cmt/campaign/?campaign_id=${campaign_id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return res.data[0];
}

export async function createCampaign(
    data: { title: string; url: string; placement_ids: number[] },
    token: string
): Promise<Campaign> {
    const res = await axios.post(`${BACKEND_URL}/cmt/campaigns`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return res.data;
}

export async function updateCampaignStatus(
    id: number,
    newStatus: boolean,
    token: string
): Promise<Campaign> {
    const res = await axios.patch(`${BACKEND_URL}/cmt/campaigns/${id}/status`,
        { is_active: newStatus },
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    );
    return res.data;
}

export async function deleteCampaign(id: number, token: string): Promise<void> {
    await axios.delete(`${BACKEND_URL}/cmt/campaigns/?campaign_id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
}

export async function fetchCampaigns(token: string, search?: string, isRunning?: boolean): Promise<Campaign[]> {
    const params: Record<string, string> = {};
    if (search) params.search = search;
    if (isRunning !== undefined) params.is_running = String(isRunning);

    const response = await axios.get(`${BACKEND_URL}/cmt/campaigns/filter`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
    });

    return response.data;
}

'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {Campaign} from "@/utils/constants/types";
import CampaignInfoCard from "@/components/cards/CampaignInfoCard";
import PayoutsTable from "@/components/tables/PayoutsTable";
import {ThemeProvider} from "@mui/material";
import {themeAlerts, themeProviders} from "@/hooks/theme";
import withPrivateRoute from "@/utils/WithPrivateRoute";
import {useSelector} from "react-redux";
import {RootState} from "@/utils/redux/store";
import {deleteCampaign, fetchCampaignById, updateCampaignStatus} from "@/api/cmt";
import AlertDialogStatus from "@/components/alerts/AlertDialogStatus";
import AnimatedAlert from "@/components/alerts/AnimatedAlert";
import AlertDialogDelete from "@/components/alerts/AlertDialogDelete";
import FilledButton from "@/components/buttons/FilledButton";
import {AxiosError} from "axios";


function CampaignPage() {
    const [showDialogStatus, setShowDialogStatus] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(true);
    const [campaign, setCampaign] = useState<Campaign>();

    const router = useRouter();
    const searchParams = useSearchParams();
    const campaignId = searchParams.get('id') || searchParams.get('campaignId');
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        async function init() {
            try {
                if (!campaignId) {
                    console.error('No campaign ID provided');
                    router.push('/management/my-campaigns');
                    return;
                }

                const numericId = Number(campaignId);

                if (isNaN(numericId)) {
                    console.error('Invalid campaign ID:', campaignId);
                    router.push('/management/my-campaigns');
                    return;
                }

                const response = await fetchCampaignById(numericId, user.jwt);
                setCampaign(response);
                setChecked(response.is_active);
            } catch (error) {
                console.error('Error fetching campaign:', error);
                router.push('/management/my-campaigns');
            } finally {
                setLoading(false);
            }
        }

        init();

    }, [campaignId, user.jwt, router]);

    async function handleAccept() {
        try {
            setLoading(true);
            await updateCampaignStatus(campaign!.id, !checked, user.jwt);
            setChecked(!checked);

            setShowAlert(true);
            setAlertType('success');
            setAlertMessage('Status changed');
        } catch (e) {
            if (e && typeof e === 'object' && 'isAxiosError' in e && (e as AxiosError).isAxiosError) {
                const axiosError = e as AxiosError;
                const message = axiosError.response?.data?.detail || "An error occurred while updating the campaign";

                setShowAlert(true);
                setAlertType('error');
                setAlertMessage(message);
            } else {
                setShowAlert(true);
                setAlertType('error');
                setAlertMessage('Unexpected error occurred');
            }
        }
        setLoading(false);
        setShowDialogStatus(false);
    }

    async function handleDelete() {
        try {
            setLoading(true);
            await deleteCampaign(campaign!.id, user.jwt);
            router.push('/management/my-campaigns');
        } catch (e) {
            if (e && typeof e === 'object' && 'isAxiosError' in e && (e as AxiosError).isAxiosError) {
                const axiosError = e as AxiosError;
                const message = axiosError.response?.data?.detail || "An error occurred while deleting the campaign";
                setShowAlert(true);
                setAlertType('error');
                setAlertMessage(message);
            } else {
                setShowAlert(true);
                setAlertType('error');
                setAlertMessage('Unexpected error occurred');
            }
        }
        setLoading(false);
        setShowDeleteDialog(false);
    }

    function handleDialogOpen() {
        setShowDialogStatus(true);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className="text-lg text-gray-600">Loading campaign...</div>
            </div>
        );
    }

    if (!campaign) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
                <div className="text-lg text-red-600 font-semibold">Campaign not found</div>
            </div>
        );
    }

    return (
        <ThemeProvider theme={themeProviders}>
            <div className="flex flex-col items-center justify-start w-full h-full p-4 space-y-6">
                <h1 className="text-2xl font-semibold text-[#333333]">{campaign.title}</h1>

                <div className='flex justify-start w-full'>
                    <h2 className='text-xl font-semibold text-[#333333]'>Information</h2>
                </div>

                <CampaignInfoCard
                    title={campaign.title}
                    url={campaign.url}
                    isActive={campaign.is_active}
                    checked={checked}
                    toggleChecked={handleDialogOpen}
                />

                <div className='flex justify-start w-full'>
                    <h2 className='text-xl font-semibold text-[#333333]'>Payouts:</h2>
                </div>

                <PayoutsTable payouts={campaign.payouts}/>

                <div className="w-full relative flex flex-col items-center justify-center">
                    <AnimatedAlert
                        isVisible={showAlert}
                        message={alertMessage}
                        type={alertType}
                        onClose={() => setShowAlert(false)}
                    />
                </div>

                <ThemeProvider theme={themeAlerts}>
                    <AlertDialogStatus
                        open={showDialogStatus}
                        state={checked}
                        handleClose={() => setShowDialogStatus(false)}
                        handleAccept={handleAccept}
                    />
                    <AlertDialogDelete
                        open={showDeleteDialog}
                        handleClose={() => setShowDeleteDialog(false)}
                        handleAccept={handleDelete}
                    />
                </ThemeProvider>

                <div className="flex justify-end w-full">
                    <div>
                        <FilledButton color={'error'} onClick={() => setShowDeleteDialog(true)}>
                            Delete campaign
                        </FilledButton>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default withPrivateRoute(CampaignPage);

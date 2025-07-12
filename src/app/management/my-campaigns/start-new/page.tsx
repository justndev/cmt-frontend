'use client';

import { Placement } from "@/utils/constants/types";
import {DataGrid, GridColDef, GridRowSelectionModel} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import React, {useEffect, useState} from "react";
import {CircularProgress, TextField, ThemeProvider } from "@mui/material";
import FilledButton from "@/components/buttons/FilledButton";
import {themeProviders} from "@/hooks/theme";
import { useRouter } from "next/navigation";
import AnimatedAlert from "@/components/alerts/AnimatedAlert";
import {createCampaign, fetchPlacements} from "@/api/cmt";
import {RootState} from "@/utils/redux/store";
import {useSelector} from "react-redux";
import withPrivateRoute from "@/utils/WithPrivateRoute";
import {AxiosError} from "axios";


const columns: GridColDef[] = [
    { field: 'provider', headerName: 'Provider', width: 130 },
    { field: 'country', headerName: 'Country', width: 130 },
    {
        field: 'imp_price_in_eur',
        headerName: 'Price per 1k IMP',
        width: 130,
    },
];

interface CampaignFormData {
    title: string;
    url: string;
    placements: number[];
}

const paginationModel = { page: 0, pageSize: 5 };

export default withPrivateRoute(StartCampaignPage)
function StartCampaignPage() {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);
    const [formAlertMessage, setFormAlertMessage] = useState('');
    const [formAlertType, setFormAlertType] = useState('');
    const [showFormAlert, setShowFormAlert] = useState(false);

    const [placements, setPlacements] = useState<Placement[]>([]);
    const [loading, setLoading] = useState(true);

    const [formErrors, setFormErrors] = useState({
        title: '',
        url: '',
        placements: ''
    });

    const [formData, setFormData] = useState<CampaignFormData>({
        title: '',
        url: '',
        placements: []
    });

    useEffect(() => {
        async function fetch() {
            // @ts-ignore
            const response = await fetchPlacements(user.jwt);
            response.forEach(item => {
                item.provider = item.provider.name
                item.imp_price_in_eur = `${item.imp_price_in_eur/100}€`
                setPlacements(prevState => [...prevState, item]);
            })
        }
        fetch();
        setLoading(false);
    }, [])

    const validateForm = () => {
        const errors = { title: '', url: '', placements: '' };
        let isValid = true;

        if (!formData.title.trim()) {
            errors.title = 'Title is required';
            isValid = false;
        } else if (formData.title.length > 255) {
            errors.title = 'Title must be less than 255 characters';
            isValid = false;
        }

        const urlPattern = /^(http:\/\/|https:\/\/)/;
        if (!formData.url.trim()) {
            errors.url = 'URL is required';
            isValid = false;
        } else if (!urlPattern.test(formData.url)) {
            errors.url = 'URL must start with http:// or https://';
            isValid = false;
        }

        if (formData.placements.length === 0) {
            errors.placements = 'At least one placement must be selected';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleRowSelectionChange = (newSelection: GridRowSelectionModel) => {
        const placementIds: number[] = []
            newSelection.ids.forEach(
            id => {
                placementIds.push(Number(id));
            }
        );

        setFormData(prev => ({
            ...prev,
            placements: placementIds
        }));
        setFormErrors(prev => ({ ...prev, placements: '' }));

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async () => {
        try {
            if (validateForm()) {
                await createCampaign({url: formData.url, title: formData.title, placement_ids: formData.placements}, user.jwt);
                setShowFormAlert(true);
                setFormAlertMessage('Created new campaign');
                setFormAlertType('success');

                setFormData({
                    title: '',
                    url: '',
                    placements: []
                })

                router.push('/management/my-campaigns');
            } else {
                console.log("Form has errors:", formErrors);
            }
        } catch (e: unknown) {
            if (e && typeof e === 'object' && 'isAxiosError' in e && (e as AxiosError).isAxiosError) {
                const axiosError = e as AxiosError;
                // @ts-ignore
                const message = axiosError.response?.data?.detail || "An error occurred while creating the campaign";
                setShowFormAlert(true);
                setFormAlertMessage(message);
                setFormAlertType('error');
            } else {
                setShowFormAlert(true);
                setFormAlertMessage("An unexpected error occurred");
                setFormAlertType('error');
            }
        }

    };

    return (
        <ThemeProvider theme={themeProviders}>
            <div className="flex flex-col items-center justify-start w-full h-full p-4 space-y-4 overflow-y-scroll">
                <h1 className='text-2xl font-semibold text-[#333333] '>
                    Start new campaign
                </h1>
                <div className='pr-45 relative'>
                    <AnimatedAlert isVisible={showFormAlert} message={formAlertMessage} type={formAlertType} onClose={()=>setShowFormAlert(false)} />
                </div>

                <div className='flex justify-start w-full'>
                    <h2 className='text-xl font-semibold text-[#333333]'>Provide information</h2>
                </div>

                <div className="rounded-sm flex flex-col gap-2 w-full bg-[#333333] p-3 shadow-xl text-white font-semibold">
                    <a>Campaign title</a>
                    <TextField
                        error={!!formErrors.title}
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        helperText={formErrors.title}
                        size="small"
                        color="white"
                        fullWidth
                    />
                    <a>Campaign URL</a>
                    <TextField
                        error={!!formErrors.url}
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        helperText={formErrors.url}
                        size="small"
                        color="white"
                        fullWidth
                    />
                </div>

                <div className='flex justify-start w-full'>
                    <h2 className='text-xl font-semibold text-[#333333]'>Choose providers</h2>
                </div>

                {
                    loading ?
                        <CircularProgress/>
                        :
                    <div className="shadow-xl w-full">
                    <Paper sx={{height: 371, width: '100%'}}>
                        <DataGrid
                            rows={placements}
                            columns={columns}
                            initialState={{pagination: {paginationModel}}}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            onRowSelectionModelChange={handleRowSelectionChange}
                        />
                    </Paper>
                </div>}
                {formErrors.placements && (
                    <p className="text-red-500 font-medium px-2 mt-1">{formErrors.placements}</p>
                )}
                <div className="flex justify-center w-[50%]">

                    <FilledButton onClick={handleSubmit}>
                        Create
                    </FilledButton>
                </div>
            </div>
        </ThemeProvider>
    );
}

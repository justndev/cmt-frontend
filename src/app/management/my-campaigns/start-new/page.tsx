'use client';

import {Placement} from "@/constants/types";
import {DataGrid, GridColDef, GridRowSelectionModel} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import {TextField, ThemeProvider} from "@mui/material";
import FilledButton from "@/components/buttons/FilledButton";
import {darkTheme} from "@/hooks/theme";

const rows: Placement[] = [
    {id: 1, provider: 'Google', country: 'USA', IMPpriceInEur: 2.5},
    {id: 2, provider: 'Facebook', country: 'Germany', IMPpriceInEur: 1.8},
    {id: 3, provider: 'Twitter', country: 'France', IMPpriceInEur: 2.1},
    {id: 4, provider: 'Instagram', country: 'Spain', IMPpriceInEur: 1.9},
    {id: 5, provider: 'LinkedIn', country: 'Italy', IMPpriceInEur: 3.2},
    {id: 6, provider: 'TikTok', country: 'Netherlands', IMPpriceInEur: 1.6},
    {id: 7, provider: 'YouTube', country: 'Sweden', IMPpriceInEur: 2.8},
    {id: 8, provider: 'Snapchat', country: 'Norway', IMPpriceInEur: 2.3},
    {id: 9, provider: 'Pinterest', country: 'Denmark', IMPpriceInEur: 1.7}
];

const columns: GridColDef[] = [
    {field: 'provider', headerName: 'Provider', width: 130},
    {field: 'country', headerName: 'Country', width: 130},
    {
        field: 'IMPpriceInEur',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
];

interface CampaignFormData {
    title: string;
    url: string;
    selectedPlacements: Placement[];
}

const paginationModel = {page: 0, pageSize: 5};

export default function StartCampaignPage() {
    // @ts-ignore

    const handleRowSelectionChange = (newSelection: GridRowSelectionModel) => {
        const selectedIds = newSelection.ids
        const selected = rows.filter((row) => selectedIds.has(row.id));
        setFormData(prev => ({
            ...prev,
            selectedPlacements: selected
        }));
    };

    const [formData, setFormData] = useState<CampaignFormData>({
        title: '',
        url: '',
        selectedPlacements: []
    });

    const handleInputChange = (field: keyof CampaignFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
    <ThemeProvider theme={darkTheme}>

        <div className="flex flex-col items-center justify-start w-full h-full   p-4 space-y-4">
            <h1 className='text-2xl font-semibold text-[#333333]'>Start new campaign</h1>
            <div className='flex justify-start w-full'>
                <h2 className='text-xl font-semibold text-[#333333]'>Provide information</h2>
            </div>

            <div className="rounded-sm flex flex-col gap-2 w-full bg-[#333333] p-3 shadow-xl text-white font-semibold">
                <a>Campaign title</a>
                <TextField id="outlined-basic" variant="outlined" color='yellow' size={'small'} fullWidth={true}/>
                <a>Campaign url</a>

                <TextField id="outlined-basic" variant="outlined" color='primary' size={'small'} fullWidth={true}/>

            </div>

            <div className='flex justify-start w-full'>
                <h2 className='text-xl font-semibold text-[#333333]'>Choose providers</h2>
            </div>
            <div className="shadow-xl w-full">
                <Paper sx={{height: 371, width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{pagination: {paginationModel}}}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        // rowSelectionModel={rowSelectionModel}
                        onRowSelectionModelChange={handleRowSelectionChange}
                    />
                </Paper>
            </div>


            <div className="flex justify-center w-[50%]">
                <FilledButton>
                    Create
                </FilledButton>
            </div>


        </div>
    </ThemeProvider>)
    ;
}

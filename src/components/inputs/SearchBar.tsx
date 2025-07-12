'use client';

import React from 'react';
import {lightTheme} from "@/hooks/theme";
import {
    FormControl,
    InputAdornment,
    TextField,
    ThemeProvider,
    Select,
    MenuItem,
    SelectChangeEvent
} from "@mui/material";
import CustomIcon from "@/components/CustomIcon";
import {ICONS} from "@/utils/constants/icons";


interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    statusFilter: 'all' | 'running' | 'paused';
    onStatusFilterChange: (status: 'all' | 'running' | 'paused') => void;
    loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 searchTerm,
                                                 onSearchChange,
                                                 statusFilter,
                                                 onStatusFilterChange,
                                                 loading = false
                                             }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    const handleStatusChange = (event: SelectChangeEvent<string>) => {
        onStatusFilterChange(event.target.value as 'all' | 'running' | 'paused');
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <div className="mb-6 gap-2 w-full">
                <TextField
                    value={searchTerm}
                    color={'black'}
                    onChange={handleSearchChange}
                    fullWidth={true}
                    label="Search campaigns by title or URL"
                    id="search-campaigns"
                    disabled={loading}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CustomIcon icon={ICONS.search} size={25}/>
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <div className="flex items-center gap-4 relative mt-3">
                    <div className="absolute left-2 top-[9px] z-1000 bg-[#f2f2f2] p-[2px]">
                        <CustomIcon icon={ICONS.filter} size={20}/>
                    </div>

                    <FormControl color={'grey'}>
                        <Select
                            sx={{minWidth: 200, background: '#f2f2f2', height: 40, borderRadius: 4}}
                            color={'grey'}
                            labelId="status-filter-label"
                            value={statusFilter}
                            onChange={handleStatusChange}
                            disabled={loading}
                        >
                            <MenuItem value="all">
                                <div className="flex items-center gap-2 ml-5">
                                    <span>All Campaigns</span>
                                </div>
                            </MenuItem>
                            <MenuItem value="running">
                                <div className="flex items-center gap-2">
                                    <CustomIcon icon={ICONS.play} size={16}/>
                                    <span>Running Only</span>
                                </div>
                            </MenuItem>
                            <MenuItem value="paused">
                                <div className="flex items-center gap-2">
                                    <CustomIcon icon={ICONS.pause} size={16}/>
                                    <span>Paused Only</span>
                                </div>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SearchBar;

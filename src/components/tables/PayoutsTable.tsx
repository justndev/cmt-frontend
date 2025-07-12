'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Payout} from "@/utils/constants/types";
import {COLORS} from "@/utils/constants/colors";
import {formatEur, formatImp, getTotalToPay} from '@/utils/functions';


const PayoutsTable = ({payouts}: {payouts: Payout[]}) => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow key={'payout-header-row'}>
                        <TableCell
                            align="center"
                            sx={{ color: 'white', fontWeight: 'bold' }}
                        >
                            Provider
                        </TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Country
                        </TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Price per 1k IMP
                        </TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                            Impressions
                        </TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                            To pay
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {payouts.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell sx={{ color: 'white' }}>{row.placement.provider.name}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.placement.country}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{Number(row.placement.imp_price_in_eur)/100}€</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{formatImp(row.total_imp)}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{formatEur(row.to_pay_in_eur)}</TableCell>

                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3}/>
                        <TableCell align={'right'} sx={{ color: COLORS.yellow, fontWeight: 'bold' }}>Total:</TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>{getTotalToPay(payouts)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PayoutsTable;

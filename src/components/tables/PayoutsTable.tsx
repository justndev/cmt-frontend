import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Placement} from "@/constants/types";
import {COLORS} from "@/constants/colors";

const TAX_RATE = 0.07;

const rows: Placement[] = [
    {id: 1, provider: 'Google', country: 'USA', IMPpriceInEur: 2.5, totalIMP: 120000, toPayInEur: 250000},
    {id: 1, provider: 'META', country: 'India', IMPpriceInEur: 0.5, totalIMP: 60000, toPayInEur: 75000},

];

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}




interface Row {
    provider: string;
    country: number;
    IMPpriceInEur: number;
    totalIMP: number;
    toPayInEur: number;
}


function formatEur(num: number) {
    return `${num/100}€`;
}

function formatImp(num: number) {
    return `${(num/1000).toFixed(1)}k`;

}


function getTotalToPay() {
    let total = 0;
    rows.forEach(row => {
        total += row.toPayInEur;
    })
    return formatEur(total);
}
const PayoutsTable = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="spanning table">
                <TableHead>
                    <TableRow>
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
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell sx={{ color: 'white' }}>{row.provider}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.country}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.IMPpriceInEur}€</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{formatImp(row.totalIMP)}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{formatEur(row.toPayInEur)}</TableCell>

                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3}/>
                        <TableCell align={'right'} sx={{ color: COLORS.yellow, fontWeight: 'bold' }}>Total:</TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>{getTotalToPay()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PayoutsTable;

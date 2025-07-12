import {Payout} from "@/utils/constants/types";

export function formatEur(num: number) {
    return `${num/100}€`;
}

export function formatImp(num: number) {
    return `${(num/1000).toFixed(1)}k`;

}

export function getTotalToPay(payouts: Payout[]) {
    let total = 0;
    payouts.forEach(row => {
        total += row.to_pay_in_eur;
    })
    return formatEur(total);
}

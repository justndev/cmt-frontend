export interface Placement {
    id: number;
    provider: string;
    country: string;
    IMPpriceInEur: number;
    totalIMP?: number;
    toPayInEur?: number;
}

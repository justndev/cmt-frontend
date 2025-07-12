export interface Placement {
    id: number;
    provider: Provider;
    country: string;
    imp_price_in_eur: number;
}

export interface RegisterPayload {
    username: string;
    password: string;
}

export interface LoginPayload {
    username: string;
    password: string;
}

export interface RegisterResponse {
    id: number;
    username: string;
    created_at: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface Campaign {
    id: number;
    title: string;
    url: string;
    placements: Placement[];
    payouts: Payout[];
    is_active: boolean;
    currentPayoutInEUR: number;
}

export interface Provider {
    id: number;
    name: string;
}

export interface Payout {
    id: number;
    placement: Placement;
    provider: Provider;
    to_pay_in_eur: number;
    total_imp: number;
}

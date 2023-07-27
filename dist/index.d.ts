export interface UserInfo {
    id: number;
    username: string;
    nickname?: string;
    email: string | null;
    twitterId?: string | null;
    twitterToken?: string;
    discordId?: string | null;
    discordName?: string;
    dcRefreshToken?: string;
    wallets?: {
        gameWallet: {
            address: string;
        } | null;
        assetWallets: {
            address: string;
        }[] | null;
    };
}
export interface RankItem {
    uid: string | number;
    rank: number;
    username: string;
    score: number;
    avatar: string;
}
export declare const init: () => void;
export declare const login: () => void;
export declare const logout: () => void;
export declare const listenUser: (callback?: (info: UserInfo | null) => void) => void;
export declare const topup: (gameOrderId: number, amount: number) => void;
export declare const withdrawal: (gameOrderId: number, amount: number) => void;
export declare const updateRank: (show: boolean, list: RankItem[]) => void;
export declare const listenTopup: (callback?: (data: {
    gameOrderId: number;
    status: 'pending' | 'success' | 'failed';
}) => void) => void;
export declare const listenWithdrawal: (callback?: (data: {
    gameOrderId: number;
    status: 'pending' | 'success' | 'failed';
}) => void) => void;

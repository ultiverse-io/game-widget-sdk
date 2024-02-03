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
    connected: string;
    accessToken: string;
}
export interface ContractParams {
    tagId?: string;
    address: string;
    abi: any;
    action: string;
    args?: any[];
    value?: number;
}
export interface ReadContractCallbackInfo {
    tagId: string;
    data?: any;
    status: 'pengding' | 'success' | 'failed';
    message?: string;
}
export interface WriteContractCallbackInfo {
    tagId: string;
    data?: {
        transactionHash: string;
    };
    status: 'pengding' | 'success' | 'failed';
    message?: string;
}
export declare const init: () => void;
export declare const login: () => void;
export declare const logout: () => void;
export declare const readContract: (data: ContractParams) => string;
export declare const writeContract: (data: ContractParams) => string;
export declare const listenReadContractCallback: (callback?: (info: ReadContractCallbackInfo) => void) => void;
export declare const listenWriteContractCallback: (callback?: (info: WriteContractCallbackInfo) => void) => void;
export declare const listenUser: (callback?: (info: UserInfo | null) => void) => void;

import { Bellhop } from 'bellhop-iframe';

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
  status: 'pengding' | 'success' | 'failed',
  message?: string;
}

export interface WriteContractCallbackInfo {
  tagId: string;
  data?: {
    transactionHash: string;
  };
  status: 'pengding' | 'success' | 'failed',
  message?: string;
}

const bellhop = new Bellhop();

export const init = () => {
  bellhop.connect();
  bellhop.send('init');
}

export const login = () => {
  const tagId = `${+new Date()}`;
  bellhop.send('login', {
    tag_id: tagId
  });
}

export const logout = () => {
  const tagId = `${+new Date()}`;
  bellhop.send('logout', {
    tag_id: tagId
  });
}

export const readContract = (data: ContractParams) => {
  const tagId = `${+new Date()}`;
  const params = {
    tagId,
    ...data
  }
  bellhop.send('read_contract', params);
  return params.tagId;
}

export const writeContract = (data: ContractParams) => {
  const tagId = `${+new Date()}`;
  const params = {
    tagId,
    ...data
  }
  bellhop.send('write_contract', params);
  return params.tagId;
}

export const listenReadContractCallback = (callback?: (info: ReadContractCallbackInfo) => void) => {
  bellhop.on('read_contract_callback', ({ data }) => {
    callback && callback(data);
  });
}

export const listenWriteContractCallback = (callback?: (info: WriteContractCallbackInfo) => void) => {
  bellhop.on('write_contract_callback', ({ data }) => {
    callback && callback(data);
  });
}

export const listenUser = (callback?: (info: UserInfo | null) => void) => {
  bellhop.on('user_info', ({ data }) => {
    callback && callback(data.user_info);
  });
}
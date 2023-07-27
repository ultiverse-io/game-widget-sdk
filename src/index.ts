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
  }
}

export interface RankItem {
  rank: number;
  username: string;
  score: number;
  avatar: string;
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

export const listenUser = (callback?: (info: UserInfo | null) => void) => {
  bellhop.on('user_info', ({ data }) => {
    callback && callback(data.user_info);
  });
}

export const topup = (gameOrderId: number, amount: number) => {
  if (!amount) return;

  bellhop.send('topup', {
    amount,
    gameOrderId
  });
}

export const withdrawal = (gameOrderId: number, amount: number) => {
  if (!amount) return;

  bellhop.send('withdrawal', {
    amount,
    gameOrderId
  });
}

export const updateRank = (show: boolean, list: RankItem[]) => {
  bellhop.send('update_rank', {
    show,
    list
  });
}

export const listenTopup = (callback?: (data: { gameOrderId: number, status: 'pending' | 'success' | 'failed' }) => void) => {
  bellhop.on('topup_status', ({ data }) => {
    callback && callback(data);
  });
}

export const listenWithdrawal = (callback?: (data: { gameOrderId: number, status: 'pending' | 'success' | 'failed' }) => void) => {
  bellhop.on('withdrawal_status', ({ data }) => {
    callback && callback(data);
  });
}

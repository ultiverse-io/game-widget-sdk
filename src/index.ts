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
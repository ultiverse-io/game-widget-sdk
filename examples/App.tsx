import React, { useEffect, useState } from 'react';
import { init, listenUser, login, logout, topup, withdrawal, updateRank, UserInfo, RankItem } from '../dist';

const rankList: RankItem[] = [
  {
    rank: 1,
    username: 'helloworld',
    score: 50000,
    avatar: '',
    uid: 1111,
  },
  {
    rank: 2,
    username: 'helloworld',
    score: 50000,
    avatar: '',
    uid: 2222,
  },
  {
    rank: 3,
    username: 'helloworld',
    score: 50000,
    avatar: '',
    uid: 3333,
  },
  {
    rank: 4,
    username: 'helloworld',
    score: 50000,
    avatar: '',
    uid: 4444,
  },
  {
    rank: 4,
    username: 'helloworld',
    score: 50000,
    avatar: '',
    uid: 5555,
  },
  {
    rank: 4,
    username: 'helloworld',
    score: 50000,
    avatar: '',
    uid: 6666,
  },
]

const App = () => {

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    init();
    listenUser((info) => {
      setUserInfo(info);
    })
  }, []);

  return (
    <div className='App'>
      <button style={{ marginRight: '8px' }} onClick={login}>Login</button>
      {userInfo && <div>User Id: {userInfo?.id}</div>}
      <button onClick={logout}>Logout</button>
      <div>
        {userInfo && <button onClick={() => topup(123, 1)}>topup</button>}
      </div>
      <div>
        {userInfo && <button onClick={() => withdrawal(123, 1)}>withdrawal</button>}
      </div>
      <div>
        {userInfo && <button onClick={() => updateRank(true, rankList)}>show rank</button>}
      </div>
    </div>
  );
};

export default App;
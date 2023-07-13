import React, { useEffect, useState } from 'react';
import { init, listenUser, login, logout, topup, withdrawal, UserInfo } from '../dist';

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
        {userInfo && <button onClick={() => topup(123, 30000)}>topup</button>}
      </div>
      <div>
        {userInfo && <button onClick={() => withdrawal(123, 30000)}>withdrawal</button>}
      </div>
    </div>
  );
};

export default App;
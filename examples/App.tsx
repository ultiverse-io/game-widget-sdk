import React, { useEffect, useState } from 'react';
import {
  init,
  listenUser,
  login,
  logout,
  UserInfo,
  readContract,
  writeContract,
  listenReadContractCallback,
  listenWriteContractCallback,
  ReadContractCallbackInfo,
  WriteContractCallbackInfo
} from '../dist';
import abi from './abi.json';

let balanceOfAddress = '';
let targetAddress = '';
let tokenId = '';

const App = () => {

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const [readCallback, setReadCallback] = useState<ReadContractCallbackInfo | null>(null);
  const [writeCallback, setWriteCallback] = useState<WriteContractCallbackInfo | null>(null);

  useEffect(() => {
    init();
    listenUser((info) => {
      console.log('listenUser:', info)
      setUserInfo(info);
    })
    listenReadContractCallback((result) => {
      console.log('listenReadContractCallback:', result)
      setReadCallback(result);
    });
    listenWriteContractCallback((result) => {
      console.log('listenWriteContractCallback:', result)
      setWriteCallback(result);
    });
  }, []);

  return (
    <div className='App'>
      <button style={{ marginRight: '8px' }} onClick={login}>Login</button>
      {userInfo && <div>User Id: {userInfo?.id}</div>}
      <div style={{ margin: '12px 0' }}>
        <strong>Read Contract Demo: balanceOf</strong>
        <div>address: <input onChange={(e) => balanceOfAddress = e.target.value} /></div>
        <button
          onClick={() => balanceOfAddress && readContract({
            tagId: 'read1',
            address: '0x6A2bB1129f7CbD561748a6c832cb8499e9f68C05',
            abi,
            action: 'balanceOf',
            args: [balanceOfAddress]
          })}
        >
          Confirm
        </button>
        <div>Callback: {JSON.stringify(readCallback)}</div>
      </div>
      {userInfo && (
        <div style={{ margin: '0 0 12px 0' }}>
          <strong>Write Contract Demo: safeTransferFrom(address,address,uint256)</strong>
          <div>from address: {userInfo.connected}</div>
          <div>target address: <input onChange={(e) => targetAddress = e.target.value} /></div>
          <div>tokenId: <input onChange={(e) => tokenId = e.target.value} /></div>
          <button
            onClick={() => targetAddress && tokenId !== '' && writeContract({
              tagId: 'write1',
              address: '0x6A2bB1129f7CbD561748a6c832cb8499e9f68C05',
              abi,
              action: 'safeTransferFrom(address,address,uint256)',
              args: [userInfo.connected, targetAddress, tokenId]
            })}
          >
            Confirm
          </button>
          <div>Callback: {JSON.stringify(writeCallback)}</div>
        </div>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default App;
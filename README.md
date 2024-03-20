# game-widget-sdk

```typescript
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
} from 'dist';

// dispatch user listener
init();

// open login modal
// success: dispatch user listener
login();

// listen user info
listenUser((info) => {
  setUserInfo(info);
});

// logout
// success: dispatch user listener
logout();


// tagId: mark your callback
const tagId = readContract({
  tagId: 'read1',
  address: contractAddress,
  abi,
  action: 'balanceOf',
  args: [balanceOfAddress]
})

listenReadContractCallback((result) => {
  console.log('listenReadContractCallback:', result, result.tagId)
  setReadCallback(result);
});

// tagId: mark your callback
const tagId = writeContract({
  tagId: 'write1',
  address: contractAddress,
  abi,
  action: 'safeTransferFrom(address,address,uint256)',
  args: [userInfo.connected, targetAddress, tokenId]
})

listenWriteContractCallback(async (result) => {
  console.log('listenWriteContractCallback:', result, result.tagId)
  if (result.status === 'failed') {
    setWriteCallback('failed');
  } else if (result.status === 'success') {
    const checkRes = fetch('/api/server/check',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.parse({
        address: userInfo.connected,
      })
    })
  
    if (checkRes.success) {
      setWriteCallback('success');
    } else {
      setWriteCallback('failed');
    }
  } else {
    result.status === 'loading'
  }
});


```

# game-widget-sdk

```typescript
import { init, listenUser, login, logout, UserInfo } from 'dist';

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
```
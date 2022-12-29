[![npm version](https://badge.fury.io/js/@webxauth%2Fwebxauth-ui-react-native.svg)](https://badge.fury.io/js/@webxauth%2Fwebxauth-ui-react-native)
# webxauth-ui-react-native

This TypeScript library is used within a vanilla [**React Native**](https://reactnative.dev/) or [**Expo**](https://expo.dev/) project to add web3 based authentication capabilities.

✅ Supported
---
- WalletConnect v1.0
- MetaMask

📦 Installation
---
```sh
npm i @webxauth/webxauth-ui-react-native
```

🚀 Usage
---
- Import
  ```js
  import { AuthWebView, WebViewMessage } from '@webxauth/webxauth-ui-react-native';
  ```

- Define callbacks
https://github.com/webxauth/webXauth-ui-react-native/blob/b403873bb302f8914bc7d30b1275392bf93a7201/example/src/App.tsx#L7-L29
- Add React Native component
https://github.com/webxauth/webXauth-ui-react-native/blob/b403873bb302f8914bc7d30b1275392bf93a7201/example/src/App.tsx#L32-L42

🕳️ Pitfalls
---
- `onPostMessage` must return `true` to allow callback information to be propagated.
  https://github.com/webxauth/webXauth-ui-react-native/blob/a96890c94c5ffdeea2c55f7dbe5b013612b8399c/src/utils/WebViewMessageBroker.ts#L38-L52

🗺️ Roadmap
---
- WalletConnect v2.0

👁️ Maintainer
---
Developed and maintained by the folks at [Bonuz](https://github.com/bonuz-market).

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bonuz-market/.github/main/profile/bonuz_light.svg" width="120">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/bonuz-market/.github/main/profile/bonuz_dark.svg" width="120">
  <img alt="webxauth logo" src="https://raw.githubusercontent.com/bonuz-market/.github/main/profile/bonuz_dark.svg">
</picture>

import * as React from 'react';

import { AuthWebView, WebViewMessage } from 'webxauth-ui-react-native';

export default function App() {
  /*
   *    BEGIN _ WebView Methods
   */
  const onPostMessage = async (message: WebViewMessage) => {
    console.log('App ::: onPostMessage ::: message', JSON.stringify(message));

    return true;
  };

  const onPostAction = async (action: string) => {
    console.log('App ::: onPostAction ::: action', action);
  };

  const onPostData = async (data: object) => {
    const stringifiedData = JSON.stringify(data);
    console.log('onPostData ::: stringifiedData', stringifiedData);
  };

  const onClickMetaMask = async () => {};

  const onClickWalletConnect = async () => {};

  const onErrorAuthWebView = async (error: unknown) => {
    console.log('error', error);
  };
  /*
   *    END _ WebView Methods
   */

  return (
    <AuthWebView
      onClickMetaMask={onClickMetaMask}
      onClickWalletConnect={onClickWalletConnect}
      onPostAction={onPostAction}
      onPostData={onPostData}
      onPostMessage={onPostMessage}
      onError={onErrorAuthWebView}
      delay={1000}
      backgroundColor={'#eaeaea'}
      dependencies={[]}
    />
  );
}

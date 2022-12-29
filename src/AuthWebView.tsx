/*
 *    FRAMEWORK
 */
import React, { useEffect, useMemo, useState } from 'react'
import { useWindowDimensions, Platform } from 'react-native'
/*
 *    COMPONENTS
 */
import WebView from 'react-native-webview'
import { LoadingIndicator } from './components/LoadingIndicator'
/*
 *    UTILS
 */
import { buildUserAgentString, runBeforeFirst, runFirst } from './utils/webview'
import MessageBroker, {
  WebViewMessage,
  WebViewMessageBrokerConfig,
} from './utils/WebViewMessageBroker'

type AuthWebViewProps = {
  messageBroker?: MessageBroker
  delay: number
  backgroundColor: string
  onPostMessage?: (message: WebViewMessage) => Promise<boolean>
  onPostAction?: (action: string) => Promise<void>
  onPostData?: (data: object) => Promise<void>
  onClickWalletConnect?: () => Promise<void>
  onClickMetaMask?: () => Promise<void>
  onError: (error: unknown) => Promise<void>
  dependencies: unknown[]
}

const AuthWebView = ({
  delay,
  backgroundColor,
  onPostMessage,
  onPostAction: onPostActionOuter,
  onPostData,
  onClickMetaMask,
  onClickWalletConnect,
  onError,
  dependencies,
}: AuthWebViewProps) => {
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false)
  const { width, height } = useWindowDimensions()

  const [isDelaying, setIsDelaying] = useState(true)

  const onPostAction = async (action: string) => {
    if (action === 'walletconnect') onClickWalletConnect && (await onClickWalletConnect())
    else if (action === 'metamask') onClickMetaMask && (await onClickMetaMask())

    onPostActionOuter && onPostActionOuter(action)
  }
  const config: WebViewMessageBrokerConfig = {
    onPostAction,
    onPostData,
    onPostMessage,
    onError,
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messageBroker = useMemo(() => new MessageBroker(config), dependencies)

  const isfullyLoaded = isWebViewLoaded && !isDelaying

  useEffect(() => {
    setTimeout(() => setIsDelaying(false), delay)
  })

  return (
    <>
      {!isfullyLoaded && (
        <LoadingIndicator width={width} height={height} backgroundColor={backgroundColor} />
      )}

      <WebView
        source={{ uri: 'https://auth.bonuz.market/logout' }}
        onMessage={async (event) => messageBroker!.handleOnMessage(event)}
        injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
        userAgent={buildUserAgentString(Platform.OS)}
        onLoadEnd={() => setIsWebViewLoaded(true)}
        startInLoadingState={true}
      />
    </>
  )
}

export { AuthWebView, AuthWebViewProps }

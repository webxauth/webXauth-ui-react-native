/**
 *     Webview
 */
import { WebViewMessageEvent } from 'react-native-webview'

export type WebViewMessageBrokerConfig = {
  onPostMessage?: (message: WebViewMessage) => Promise<boolean>
  onPostAction?: (action: string) => Promise<void>
  onPostData?: (data: object) => Promise<void>
  onError: (error: unknown) => Promise<void>
}

export type WebViewMessageType = 'action' | 'data'

export interface WebViewMessageActionType {
  target: string
}

export interface WebViewMessageDataType {
  name: string
  data: object
}

export interface WebViewMessage {
  type: WebViewMessageType
  payload: WebViewMessageActionType | WebViewMessageDataType
}

class MessageBroker {
  constructor(private config: WebViewMessageBrokerConfig) {}

  handleOnMessage = async (event: WebViewMessageEvent) => {
    try {
      const stringifiedData = event.nativeEvent.data
      const message = JSON.parse(stringifiedData) as WebViewMessage

      const continueToProcess = this.config.onPostMessage && await this.config.onPostMessage(message)
      if (continueToProcess !== true) return

      if (message.type === 'action') {
        const actionMessage = message.payload as WebViewMessageActionType
        if (this.config.onPostAction) await this.config.onPostAction(actionMessage.target)
        else throw new Error('No action handler found.')
      } else if (message.type === 'data') {
        const dataMessage = message.payload as WebViewMessageDataType
        if (this.config.onPostData) await this.config.onPostData(dataMessage.data)
        else throw new Error('No data handler found.')
      }
      // else throw new Error(`Unknown message type '${message.type}'.`)
      this.config.onPostMessage && await this.config.onPostMessage(message)
    } catch (e) {
      this.config.onError(e)
    }
  }
}

export default MessageBroker

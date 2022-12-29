import type { Platform } from 'react-native'

const buildUserAgentString = (os: typeof Platform.OS) => {
  if (os === 'android') return 'Chrome/18.0.1025.133 Mobile Safari/535.19'
  else if (os === 'ios' || os === 'macos')
    return 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'

  throw new Error(`Platform not supported: ${os}`)
}

const runFirst = `
setTimeout(function() {
    localStorage.setItem("isMobile", "1");
  }, 100);
true; // note: this is required, or you'll sometimes get silent failures
`
const runBeforeFirst = `
window.isNativeApp = true;
true; // note: this is required, or you'll sometimes get silent failures
`

export { buildUserAgentString, runFirst, runBeforeFirst }

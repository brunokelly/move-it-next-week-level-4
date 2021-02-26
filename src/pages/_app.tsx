import '../styles/global.css'

import { ChallangeProvider } from '../contexts/ChallangeContext'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp

import { WeightControlContextProvider } from '../contexts/WeightControlContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <WeightControlContextProvider>
      <Component {...pageProps} />
    </WeightControlContextProvider>
  )
}

export default MyApp

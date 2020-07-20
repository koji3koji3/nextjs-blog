//全体適用のCSSらしい。ここで、基本にしていく色等を当てはめる
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
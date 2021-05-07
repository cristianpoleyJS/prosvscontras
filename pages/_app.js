import AppLayout from 'components/AppLayout'
import 'tailwindcss/tailwind.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default App

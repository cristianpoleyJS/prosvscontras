import AppLayout from 'components/AppLayout'
import 'tailwindcss/tailwind.css'
import useThemeMode from 'hooks/useThemeMode'

function App ({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useThemeMode()
  return (
    <>
      <AppLayout themeMode={themeMode} setThemeMode={setThemeMode}>
        <Component {...pageProps} themeMode={themeMode} setThemeMode={setThemeMode} />
      </AppLayout>
    </>
  )
}

export default App

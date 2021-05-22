import FooterApp from 'components/FooterApp'
import Head from 'next/head'
import HeaderApp from 'components/HeaderApp'

export default function AppLayout ({ children, themeMode, setThemeMode }) {
  return (
    <>
      <main className="h-screen font-sans bg-gray-100 dark:bg-gray-900">
        <Head>
            <title>ProsVsContras</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"></meta>
            <meta name="Description" content="Are you hesitating to do one thing or the other? ProVSContras will help you make the best decision!"></meta>
        </Head>
        <HeaderApp themeMode={themeMode} setThemeMode={setThemeMode}/>
          {children}
        <FooterApp />
      </main>
    </>
  )
}

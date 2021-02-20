import FooterApp from 'components/FooterApp'
import Head from 'next/head'
import HeaderApp from 'components/HeaderApp'

export default function AppLayout ({ children }) {
  return (
    <>
      <main>
        <Head>
            <title>ProsVsContras</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width"/>
            <meta name="Description" content="Are you hesitating to do one thing or the other? ProVSContras will help you make the best decision!"></meta>
        </Head>
        <HeaderApp/>
          {children}
        <FooterApp />
      </main>
      <style jsx>{`
        main {
          height: 100vh;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

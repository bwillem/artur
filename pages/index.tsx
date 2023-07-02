import Head from 'next/head'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Artur Gadja</title>
        <meta name="description" content="Artur Gadja | Cinematographer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      </main>
    </>
  )
}

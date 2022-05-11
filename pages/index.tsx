import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from "../components/Sidebar"
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto  max-h-screen overflow-hidden
    lg:max-w-6xl">
      <Head>
        <title>SaturnBay | Blazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1 className='text-saturnbay'>Welcome to SaturnBay</h1> */}

      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed />

        <Widgets />
      </main>










      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

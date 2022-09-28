import type { NextPage } from 'next'
import Header from '../components/header/Header'
import Navbar from '../components/nav/Navbar'

const Home: NextPage = () => {
  return (
    <div className=''>
      <div className='flex'>
        <Navbar />
        <Header />
      </div>
    </div>
  )
}

export default Home

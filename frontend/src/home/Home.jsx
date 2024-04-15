import React from 'react'
import Banner from '../components/Banner'
import BestSellBooks from './BestSellBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

function Home() {
  return (
    <div className=''>
      <Banner/>
      <BestSellBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>      
  )
}

export default Home
import React from 'react'
import BigheadersFile from '../components/BigheadersFile'
import Cart from '../components/Cart'
import Product from '../components/Product'
import SearchProduct from '../components/SearchProduct'
import Filter from '../components/Filter'
import AllBlocks from '../components/AllBlocks'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Model1 from '../components/Model1'

function Shop() {
  return (

    <>
    <BigheadersFile />
    <Cart />
    <Product />
    <SearchProduct />
    <Filter />
    <AllBlocks />

    {/* Load more */}
<div className="flex-c-m flex-w w-full p-t-45">
  <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
    Load More
  </a>
</div>

    <Footer />
    <BackToTop />
    <Model1 />


    </>


  )
}

export default Shop
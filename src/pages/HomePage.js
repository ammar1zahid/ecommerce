import React from 'react';
import BigheadersFile from '../components/BigheadersFile';
import Cart from '../components/Cart';
// import Slider from '../components/ImgSlider';
import Banner from '../components/Banner';
import Product from '../components/Product';
import SearchProduct from '../components/SearchProduct';
import Filter from '../components/Filter';
import AllBlocks from '../components/AllBlocks';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Model1 from '../components/Model1';
import ImgSlider from '../components/ImgSlider';
import { useEffect } from 'react';
import initializeScript from '../scripts/MainFunctions.js';
// import MapCustomFunc from '../scripts/MapCustomFile.js';
// import SlickCustomFunc from '../scripts/SlickCustomFile.js';


// import FunctionsMain from './scripts/FunctionsMain';


function HomePage() {

  
  
    // useEffect(() => {
      /* eslint-disable no-unused-expressions */
// document.body.classList.add('animsition');
/* eslint-enable no-unused-expressions */
      // initializeScript();
      // return() => {document.body.classList.remove('animsition');};
      
        // MapCustomFunc();
        // SlickCustomFunc();
      // }, []);

  return (
  <>
  
  {/* <body class="animsition" style={{ animationDuration: '1500ms', opacity: 1 }}> */}

  <BigheadersFile />
	<Cart />
  <ImgSlider/>
  <Banner />
  <Product />
  <SearchProduct />
  <Filter />
  <AllBlocks />
  <Footer />
  <BackToTop />
  <Model1 />


  {/* </body> */}
	



	

				
				




			




  
//   </>
  );
}


export default HomePage




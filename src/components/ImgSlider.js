import React from 'react'


// import React, { useEffect } from 'react';
// import Slider from 'react-slick'; 
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function ImgSlider() {

  // useEffect(() => {
  //   $('.slick1').slick(); // Initialize Slick slider
  // }, []);

  return (
    <div>

    {/* Slider */}
<section className="section-slide">
  <div className="wrap-slick1">
    <div className="slick1">

    {/*  Slide 1 */}
      <div className="item-slick1" style={{"background-image":"url(images/slide-01.jpg)"}}>
        <div className="container h-full">
          <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay={0}>
              <span className="ltext-101 cl2 respon2">
                Women Collection 2018
              </span>
            </div>
            <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay={800}>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                NEW SEASON
              </h2>
            </div>
            <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay={1600}>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  Slide 2 */}
      <div className="item-slick1" style={{"background-image":"url(images/slide-02.jpg)"}}>
        <div className="container h-full">
          <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay={0}>
              <span className="ltext-101 cl2 respon2">
                Men New-Season
              </span>
            </div>
            <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay={800}>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                Jackets &amp; Coats
              </h2>
            </div>
            <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay={1600}>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  Slide 3 */}
      <div className="item-slick1" style={{"background-image":"url(images/slide-03.jpg)"}}>
        <div className="container h-full">
          <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay={0}>
              <span className="ltext-101 cl2 respon2">
                Men Collection 2018
              </span>
            </div>
            <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay={800}>
              <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                New arrivals
              </h2>
            </div>
            <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay={1600}>
              <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ImgSlider
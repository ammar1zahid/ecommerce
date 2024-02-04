// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BigheadersFile() {

  // const location = useLocation();

  // const isLinkActive = (pathname) => location.pathname === pathname;

  const location = useLocation();

  const isLinkActive = (pathname) => location.pathname === pathname;

  // class="animsition"
  return ( 
  <>
  <div >
  {/* <body class="animsition"> */}
<header class="header-v4">
  {/* header desktop */}
  <div className="container-menu-desktop">
    {/* topbar */}
    <div className="top-bar">
      <div className="content-topbar flex-sb-m h-full container">
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>
        <div className="right-top-bar flex-w h-full">
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            Help & FAQs
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            My Account
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            EN
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            USD
          </a>
        </div>
      </div>
    </div>

    <div className="wrap-menu-desktop">
      <nav className="limiter-menu-desktop container">
        {/* Logo desktop */}
        <a href="#" className="logo">
          <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
      </a>
         {/* Menu desktop */}
  <div className="menu-desktop">
    <ul className="main-menu">
      <li className={` ${isLinkActive('/') ? 'active-menu' : ''}`}>
        {/* <a href="index.html">Home</a> */}
        <Link to="/" className={`nav-item nav-link ${isLinkActive('/') ? 'active' : ''}`}>Home</Link>
        {/* <Link to="/" className={`nav-item nav-link`}>Home</Link> */}
        {/* <ul className="sub-menu">
          <li><a href="index.html">Homepage 1</a></li>
          <li><a href="home-02.html">Homepage 2</a></li>
          <li><a href="home-03.html">Homepage 3</a></li>
        </ul> */}
      </li>
      <li className={` ${isLinkActive('/Shop') ? 'active-menu' : ''}`}>
        {/* <a href="product.html">Shop</a> */}
        <Link to="/Shop" className={`nav-item nav-link ${isLinkActive('/Shop') ? 'active' : ''}`}>Shop</Link>
      </li>
      {/* <li className="label1" data-label1="hot">
        <a href="shoping-cart.html">Features</a>
      </li> */}
      <li className={` ${isLinkActive('/CartandCheckout') ? 'active-menu' : ''}`}>
      <Link to="/CartandCheckout" className={`nav-item nav-link ${isLinkActive('/CartandCheckout') ? 'active' : ''}`}>Cart & Checkout</Link>
      </li>

      <li className={` ${isLinkActive('/Blog') ? 'active-menu' : ''}`}>
        {/* <a href="blog.html">Blog</a> */}
        <Link to="/Blog" className={`nav-item nav-link ${isLinkActive('/Blog') ? 'active' : ''}`}>Blog</Link>
      </li>
	
      <li className={` ${isLinkActive('/About') ? 'active-menu' : ''}`}>
        {/* <a href="about.html">About</a> */}
        <Link to="/About" className={`nav-item nav-link ${isLinkActive('/About') ? 'active' : ''}`}>About</Link>
      </li>

      <li className={` ${isLinkActive('/Contact') ? 'active-menu' : ''}`}>
        {/* <a href="contact.html">Contact</a> */}
        <Link to="/Contact" className={`nav-item nav-link ${isLinkActive('/Contact') ? 'active' : ''}`}>Contact</Link>
      </li>

      <li className={` ${isLinkActive('/SignLogPage') ? 'active-menu' : ''}`}>
        {/* <a href="contact.html">Contact</a> */}
        <Link to="/SignLogPage" className={`nav-item nav-link ${isLinkActive('/SignLogPage') ? 'active' : ''}`}>SignUp and Login</Link>
      </li>

    </ul>
  </div>


{/* Icon header */}
<div className="wrap-icon-header flex-w flex-r-m">
    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
      <i className="zmdi zmdi-search" />
    </div>
    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
      <i className="zmdi zmdi-shopping-cart" />
    </div>
    <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
      <i className="zmdi zmdi-favorite-outline" />
    </a>
  </div>


      </nav>
    </div>
  </div>
{/* </header> */}



  
  {/* Header Mobile */}
  {/* <div className="wrap-header-mobile"> */}
    {/* Logo moblie */}		
    {/* <div className="logo-mobile">
      <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a> */}
    {/* </div> */}
    {/* Icon header */}
    {/* <div className="wrap-icon-header flex-w flex-r-m m-r-15">
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
        <i className="zmdi zmdi-search" />
      </div>
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={2}>
        <i className="zmdi zmdi-shopping-cart" />
      </div>
      <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
        <i className="zmdi zmdi-favorite-outline" />
      </a>
    </div> */}
    {/* Button show menu */}
    {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  </div> */}
  {/* Menu Mobile */}
  {/* <div className="menu-mobile">
    <ul className="topbar-mobile">
      <li>
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>
      </li>
      <li>
        <div className="right-top-bar flex-w h-full">
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            Help &amp; FAQs
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            My Account
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            EN
          </a>
          <a href="#" className="flex-c-m p-lr-10 trans-04">
            USD
          </a>
        </div>
      </li>
    </ul>
    <ul className="main-menu-m">
      <li>
        <a href="index.html">Home</a>
        <ul className="sub-menu-m">
          <li><a href="index.html">Homepage 1</a></li>
          <li><a href="home-02.html">Homepage 2</a></li>
          <li><a href="home-03.html">Homepage 3</a></li>
        </ul>
        <span className="arrow-main-menu-m">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
      </li>
      <li>
        <a href="product.html">Shop</a>
      </li>
      <li>
        <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
      </li>
      <li>
        <a href="blog.html">Blog</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
    </ul>
  </div> */}
  {/* Modal Search */}
  <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
    <div className="container-search-header">
      <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
        <img src="images/icons/icon-close2.png" alt="CLOSE" />
      </button>
      <form className="wrap-search-header flex-w p-l-15">
        <button className="flex-c-m trans-04">
          <i className="zmdi zmdi-search" />
        </button>
        <input className="plh3" type="text" name="search" placeholder="Search..." />
      </form>
    </div>
    

    </div>
    </header>
    {/* </body> */}
    {/* </body> */}
    </div>
   </> 
  )
}

export default BigheadersFile
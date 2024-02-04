import React from "react";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartandCheckout from "./pages/CartandCheckout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SignLogPage from "./pages/SignLogPage";
// import '..node_modules/slick-carousel';

function App() {
  return (
   <>
   {/* <HomePage /> */}
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Shop" element={<Shop />}></Route>
      <Route path="/CartandCheckout" element={<CartandCheckout />}></Route>
      <Route path="/Blog" element={<Blog />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/SignLogPage" element={<SignLogPage />}></Route>

    </Routes>
    </BrowserRouter>

   </>
  )
}

export default App;

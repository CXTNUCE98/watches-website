import { Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";

import Header from './components/Header'
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ProductView from "./components/ProductView";
import ProductCard from "./components/ProductCard";

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{theme}}>
      <div id={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:slug" element={<Product/>}/>
          {/* <Route path="/products/:slug" element={<Product />}/> */}
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

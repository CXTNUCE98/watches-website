import { Routes, Route } from "react-router-dom";

import { darkTheme, lightTheme } from './utils/theme';

import Header from './components/Header'
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

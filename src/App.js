import { Routes, Route } from "react-router-dom";

import { darkTheme, lightTheme } from './utils/theme';

import Header from './components/Header'
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;

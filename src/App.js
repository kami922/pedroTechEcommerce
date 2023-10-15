import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from './context/shop-context';

//watch from 31:00 before processing tutor said nesscary to under react context api. watch a video explaining it


function App() {
  return (
    <div className="App">
        <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;

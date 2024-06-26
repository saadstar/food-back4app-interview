import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { PlaceOrder } from "./pages/placeOrder/PlaceOrder";
import { AddFoodItem } from './pages/AddFoodItem/AddFoodItem';
import Parse from "parse";

function App() {
  Parse.initialize(
    "se2hrDVab4ZGXuVlYSzcfUz8EVTb4mUlJWJZZcKq",
    "MMbmWX42XHP104JUNtVcMksl9EnlUTdlkcYIOnEK"
  );
  Parse.serverURL = "https://parseapi.back4app.com";
  Parse.liveQueryServerURL = "wss://se2hrDVab4ZGXuVlYSzcfUz8EVTb4mUlJWJZZcKq.back4app.io";
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addfood" element={<AddFoodItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
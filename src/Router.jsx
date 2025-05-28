import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Auth from './pages/Auth/Auth';
import Result from './pages/Result/Result';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="auth" element={<Auth />} />
        <Route path="payments" element={<Payment />} />
        <Route path="/category/:category" element={<Result />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

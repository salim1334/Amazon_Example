import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Auth from './pages/Auth/Auth';
import Result from './pages/Result/Result';
import ProductDetail from './pages/ProductDetail/ProductDetail';

// importing stripe
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
function Router() {

  const stripePromise = loadStripe(
    "pk_test_51RSQi7Q3mt58i6YPaKYNT1AyAzGyTevZ1QzZvO8h9ZdD0tXiWJ9Enfl7peaxgdqREeqn6C6XpiYUZ1Mi4T8dGXKj00sBa4y2wa"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="auth" element={<Auth />} />
        <Route
          path="payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/category/:category" element={<Result />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

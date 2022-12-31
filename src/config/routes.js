import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import ProductDescription from '../pages/ProductDescription';
import { Route } from 'react-router-dom';
export const routes = [
    <Route path="/" element={<Home />} />,
    <Route path="/products" element={<Products />} />,
    <Route path="/cart" element={<Cart />} />,
    <Route path="/products/:id" element={<ProductDescription />} />
]
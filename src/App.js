import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import ProductDescription from './pages/ProductDescription';

window.addEventListener('load', () => {
  gsap
    .timeline()
    .to('.loading-screen .ring', { autoAlpha: 0 })
    .to('.loading-screen', { clipPath: 'circle(0% at 0% 100%)', duration: 1, delay: -0.5 })
    .set('.loading-screen', { display: 'none' });
});

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home h="2" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDescription />} />
      </Routes>
    </>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Nav from './components/Nav'
import ProductDescription from './pages/ProductDescription'
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home h='2'/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:id' element={<ProductDescription/>} />
    </Routes>
  

    </>

  )
}

export default App;

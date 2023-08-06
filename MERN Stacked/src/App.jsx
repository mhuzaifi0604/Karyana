import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Components/Home';
const Products = () => <div className='text-black text-2xl'>Products Page</div>;
const Cart = () => <div className='text-black text-2xl'>Cart Page</div>;

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
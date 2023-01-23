import CartProvider, { CartContext } from './context/cart';
import { Login } from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './pages/register';
import { User } from './pages/user';

function App() {
  return (
    <div className="App">
      <Router>
     <CartProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/User' element={<User/>}/>
        </Routes>
     </CartProvider>
      </Router>
    </div>
  );
}

export default App;

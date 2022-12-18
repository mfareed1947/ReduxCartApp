import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import './style/app.scss'
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;

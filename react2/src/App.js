import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Payments from './Payments';
import Products from './Products';



function NavBar(){
  return (
    <div className='navbar'>
      <Link className='item' to="/home">Home</Link>
      <div className='divider'></div>
      <Link className='item' to="/products">Products</Link>
      <div className='divider'></div>
      <Link className='item' to="/payments">Payments</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route  exact path='/home' element={<Home/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/payments' element={<Payments/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

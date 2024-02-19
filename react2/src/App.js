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
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

      </head>
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

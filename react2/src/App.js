import './App.css';
import Home from './Home';
import Payments from './Payments';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <span className='item'>Home</span>
        <div className='divider'></div>
        <span className='item'>Products</span>
        <div className='divider'></div>
        <span className='item'>Payments</span>
      </div>
      <Home/>
    </div>
  );
}

export default App;

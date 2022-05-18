
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import Order from './Components/Order/Order'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/'element={<Home></Home>}></Route>
         <Route path='/product'element={<Product></Product>}></Route>
         <Route path='/order'element={<Order></Order>}></Route>
         <Route path='/login'element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

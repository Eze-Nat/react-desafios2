
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartContext from './components/Cart/CartContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <CartContext>
    <NavBar/>
      <Routes>
        <Route index path='/' element={<ItemListContainer saludo="Pagina En Construcción!" />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element={<div style={{backgroundColor: "green"}}>ERROR </div>} />
        <Route path='/cart' element={<Cart />} />
        

      </Routes>
      
      </CartContext>

        
        
    </BrowserRouter>
    </>
  );
}

export default App;

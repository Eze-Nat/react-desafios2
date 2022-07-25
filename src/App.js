
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Item from './components/Item/Item';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route index path='/' element={<ItemListContainer saludo="Pagina En Construcción!" />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element={<div style={{backgroundColor: "green"}}>ERROR </div>} />

        

      </Routes>
      
      

        
        
    </BrowserRouter>
    </>
  );
}

export default App;

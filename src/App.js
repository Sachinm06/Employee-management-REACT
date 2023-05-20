import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import View from './components/View';




function App() {
  return (
    <div>
      <Header />
     <Routes>
       <Route path='' element={<Home/>}></Route>
       <Route path='Add' element={<Add/>}></Route>
       <Route path='Edit/:id' element={<Edit/>}></Route>
       <Route path='View/:id' element={<View/>}></Route>
     </Routes>

      <Footer />
    </div>
  )
}

export default App;

import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/tabs/Main';
import Tax from './Components/Tex_Collection/Tax_Col';
import { Routes, Route,BrowserRouter } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/befiler' element={<Main/>}/>
      <Route path='/tax' element={<Tax/>}/>
      <Route path='/aboutus' element={<Home/>}/>
      <Route path='/contectus' element={<Home/>}/>
      <Route path='/oonnectwithmetamask' element={<Home/>}/>
    </Routes>
    <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;

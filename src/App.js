import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ImageDetail from './components/ImageDetail';
import UpdateImage from './components/UpdateImage';
import UploadForm from './components/UploadForm';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className='main-content'>
          <Routes>                       
            <Route element={<HomePage/>                                                                                                              } path="/" exact={true}/>
            <Route path="/new" element={<UploadForm/>}  exact/>
            <Route path='/show/:id' exact element={<ImageDetail/>}/>
            <Route path='/:id/edit' exact element={<UpdateImage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import { TweetsPage } from './components/pages/TweetsPage';
import {UserPage} from './components/pages/UserPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AuthContextProvider } from './context/AuthContextProvider';
import { TweetsContextProvider } from './context/TweetsContextProvider';
import { SignUp } from './components/pages/SignUp';
import { UserName } from './components/pages/UserName';


function App() {

  return (
    <TweetsContextProvider>
      <AuthContextProvider>
    <BrowserRouter>
      <div className="App">
        
          <NavBar/>
      
          <Routes>
            <Route path = '/signup' element = {<SignUp />} />
            <Route path = '/username' element = {<UserName />}/>
            <Route path = '/profile' element = {<UserPage />} />
            <Route path = '/' element = {<TweetsPage />} /> 
          </Routes>
      
        

      </div>
    </BrowserRouter>
    </AuthContextProvider>
    </TweetsContextProvider>
  );
}

export default App;

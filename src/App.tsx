import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Budget } from './pages/Budget';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Welcome to Forecast</>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} /> 
        <Route path="/signup" element={<SignUp/>} /> 

        <Route path="/budgets" element={<Budget/>} /> 

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

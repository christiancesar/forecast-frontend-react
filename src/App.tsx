import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}>
          <Route path="signin" element={SignIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

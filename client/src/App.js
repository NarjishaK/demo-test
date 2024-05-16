import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/user';
import Update from "./pages/update"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;

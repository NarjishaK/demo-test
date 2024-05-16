import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/user';
import Userlist from "./pages/userlist"
import Updateuser from "./pages/update"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/edit/:id" element={<Updateuser />} />
      </Routes>
    </div>
  );
}

export default App;

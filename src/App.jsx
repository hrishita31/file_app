import './App.css';

import Login from './pages/login.jsx';
import Delete from './pages/deleteuser.jsx';
import Dashboard from './pages/dashboard.jsx';
import NotFound from './pages/notfound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/deleteUser" element={<Delete />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
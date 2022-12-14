import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Lobby from './pages/Lobby';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/registration" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;

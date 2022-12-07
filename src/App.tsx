import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import Register from './pages/Register';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/lobby',
  //     element: <Lobby />,
  //   },
  //   {
  //     path: '/registration',
  //     element: <Register />,
  //   },
  // ]);
  return (
    <>
      {/* <Route path="/registration" element={<Register />} />
      <section className="main">
        <div className="main__row d-g">
          <Navbar />
          <Route path="/home" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} /> 
        </div>
      </section> */}

      <Routes>
        <Route path="/">
          <Route path="/registration" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/lobby" element={<Lobby />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

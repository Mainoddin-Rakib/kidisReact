import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css'
import Home from './pages/Home-pages/Home/Home';
import Navber from './components/Navber/Navber';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;

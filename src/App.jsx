import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Navber from './components/Common/Navber/Navber';
import Footer from './components/Common/Footer/Footer';
function App() {


  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;

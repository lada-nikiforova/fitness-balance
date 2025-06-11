import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Schedule from "./pages/Schedule";
import Price from "./pages/Price";
import Agreement from "./pages/Agreement";
import Privacy from "./pages/Privacy";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-beige font-montserrat">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/raspisanye" element={<Schedule/>}/>
            <Route path="/price" element={<Price/>}/>
            <Route path="/agreement" element={<Agreement/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

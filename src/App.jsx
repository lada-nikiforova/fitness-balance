import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Schedule from "./pages/Schedule";
import Price from "./pages/Price";

function App() {

  return (
    <HashRouter>
      <div className="min-h-screen bg-beige font-montserrat">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/raspisanye" element={<Schedule/>}/>
            <Route path="/price" element={<Price/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

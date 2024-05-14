import { ReactFragment } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
//import ChatPage from './paginas/ChatPage';
import ownStyles from './css/ownStyles.css';
import Analytics from "./paginas/Analytics";
import Home from "./paginas/Home";
import Seteo from "./paginas/Seteo";
import Settings from "./paginas/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Seteo" element={<Seteo />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

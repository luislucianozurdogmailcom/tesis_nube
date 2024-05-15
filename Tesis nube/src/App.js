import { ReactFragment } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
//import ChatPage from './paginas/ChatPage';
import ownStyles from './css/ownStyles.css';
import Dashboard from "./paginas/Dashboard";
import Home from "./paginas/Home";
import Controllers from "./paginas/Controllers";
import Settings from "./paginas/Settings";
import DQuery from "./paginas/DQuery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Controllers" element={<Controllers />} />
        <Route path="/DQuery" element={<DQuery />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

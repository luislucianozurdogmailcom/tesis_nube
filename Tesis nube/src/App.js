import { ReactFragment } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
//import ChatPage from './paginas/ChatPage';
import ownStyles from './css/ownStyles.css';
import MainPage from "./paginas/MainPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" Component={MainPage}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

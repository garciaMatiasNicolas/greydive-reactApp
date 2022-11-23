import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import ItemDetail from './components/ItemDetail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/video/:id" element={<ItemDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
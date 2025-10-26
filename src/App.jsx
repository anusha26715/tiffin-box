import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import CursorTrail from "./components/HomeComponents/CursorTrail/CursorTrail";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <CursorTrail/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

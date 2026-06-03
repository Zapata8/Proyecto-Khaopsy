import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Capitulo from "./components/Capitulo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capitulo/:id" element={<Capitulo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
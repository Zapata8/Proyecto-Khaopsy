import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Capitulo from "./components/Capitulo";
import Video from "./components/Video";
import Carrito from "./components/Carrito";


function App() {


  return (


    <BrowserRouter>


      <Routes>


        <Route 
          path="/" 
          element={<Home />} 
        />



        <Route
          path="/capitulo/:id"
          element={<Capitulo />}
        />



        <Route
          path="/video/:id"
          element={<Video />}
        />



        <Route
          path="/carrito"
          element={<Carrito />}
        />


      </Routes>


    </BrowserRouter>


  );


}


export default App;
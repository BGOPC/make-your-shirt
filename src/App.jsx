import React from "react";
import CanvasModel from "./canvas";
import Home from "./app/Home";
import Customizer from "./app/Customizer";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Preloader /> : <h1>Bienvenue sur mon portfolio</h1>}
    </div>
  );
}

export default App;

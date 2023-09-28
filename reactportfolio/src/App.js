import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import Index from "./pages/index";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <div className="App">{isLoading ? <Preloader /> : <Index />}</div>;
}

export default App;

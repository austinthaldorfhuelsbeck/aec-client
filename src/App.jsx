import { useEffect } from "react";
import { Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.css";
import "./Footer.css";

// Animate on scroll effects
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {  
  // Animate on scroll speed control
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="app-routes">
      <Switch>
        <Layout />
      </Switch>
    </div>
  );
}

import ParticleComponent from "./components/MyParticles";
import NavigationBar from "./components/headers/NavigationBar";
import Quotes from "./components/pages/Quotes";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />
      <ParticleComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/request-quotations" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;

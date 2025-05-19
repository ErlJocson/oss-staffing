import ParticleComponent from "./components/MyParticles";
import NavigationBar from "./components/headers/NavigationBar";
// import Quotes from "./components/pages/Quotes";
import Services from "./components/pages/Services";
import Insights from "./components/pages/Insights";
import Pricing from "./components/pages/Pricing";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />
      <ParticleComponent />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/request-quotations" element={<Quotes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Card from "./Component/Card"

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Card />
    </div>
  );
}

export default App;

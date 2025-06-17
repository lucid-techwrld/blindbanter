import "./App.css";
import pattern from "./assets/bg-pattern.png";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div
      className="w-full h-full min-h-screen bg-white"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroSection />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;

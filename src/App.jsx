import "./App.css";
import pattern from "./assets/bg-pattern.png";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Video from "./components/Video";

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
      <Header />
      <HeroSection />
      <Video />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;

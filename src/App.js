import "./App.css";
import CarouselSlider from "./components/CarouselSlider.js";
import Leaderboard from "./components/Leaderboard.js";


function App() {
  return (
    <div className="app">
    <div className="container">
      <div className="leaderboard"><Leaderboard /></div>
      <div className="carousel"><CarouselSlider /></div>
    </div>
    </div>
  );
}

export default App;
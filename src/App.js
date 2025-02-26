import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import './App.css';
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import AllBeers from "./pages/AllBeers";


function App() {
  return (
    <div>
      
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>

    </div>
  );
}

export default App;

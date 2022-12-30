
import './App.css';
import DailyStats from './components/DailyStats/DailyStats';
import FeatureOne from './components/FeatureOne/FeatureOne';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

import { Card } from './components/Card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';


function App() {

  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

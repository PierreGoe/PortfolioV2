import { Routes, Route } from 'react-router-dom';
import AboutUs from 'Pages/AboutUs';
import Portfolio from 'Pages/Portfolie';
import HomePage from './Pages/HomePage';
import 'App.sass';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;

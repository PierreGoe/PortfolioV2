import { Routes, Route } from 'react-router-dom';
import AboutUs from 'Pages/AboutUs';
import HomePage from './Pages/HomePage';
import 'App.sass';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;

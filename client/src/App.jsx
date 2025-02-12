import { Routes, Route } from 'react-router-dom'; // Add these imports
import Home from './Home/Home.jsx';
import About from './About/About.jsx'; // Add this import if you have an About page
import OurTeam from './OurTeam/OurTeam.jsx'; // Corrected import for OurTeam

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home page */}
      <Route path="/about" element={<About />} /> {/* About page */}
      <Route path="/ourTeam" element={<OurTeam />} /> {/* OurTeam page */}
    </Routes>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom' // Add these imports
import Home from './Home/Home.jsx'
import About from './About/About.jsx' // Add this import if you have an About page

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
      </Routes>
  );
}

export default App;
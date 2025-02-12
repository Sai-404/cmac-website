import { Routes, Route } from 'react-router-dom' // Add these imports
import Home from './Home/Home.jsx'
import About from './About/About.jsx' // Add this import if you have an About page
import Contact from './Contact/Contact.jsx'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contact" element={<Contact />} /> {/* contact page */}
      </Routes>
  );
}

export default App;
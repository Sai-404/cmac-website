import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './Home/Home.jsx'; // Import Home component
import About from './About/About.jsx'; // Import About component
import OurTeam from './OurTeam/OurTeam.jsx'; // Import OurTeam component
import Contact from './Contact/Contact.jsx'; // Import Contact component
import Gallery from './Home/Components/Gallery.jsx'; // Import Gallery component
import NotFound from './Home/Components/NotFound.jsx'; // Import NotFound component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home page */}
      <Route path="/about" element={<About />} /> {/* About page */}
      <Route path="/ourTeam" element={<OurTeam />} /> {/* Our Team page */}
      <Route path="/contact" element={<Contact />} /> {/* Contact page */}
      <Route path="/gallery" element={<Gallery />} /> {/* Gallery page */}
      <Route path="*" element={<NotFound />} /> {/* 404 page */}
    </Routes>
  );
}

export default App;
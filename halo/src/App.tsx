import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

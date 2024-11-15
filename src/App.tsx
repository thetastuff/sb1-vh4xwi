import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { LandingPage } from './pages/landing';
import { Categories } from './pages/categories';
import { WatchRoom } from './pages/watch-room';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/watch-room/:id" element={<WatchRoom />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
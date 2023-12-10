import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApprovedCourse from './pages/AprovedCourse/AprovedCourse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path='/approvedcourse' element={<ApprovedCourse />} />
      </Routes>
    </Router>
  );
}

export default App;


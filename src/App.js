import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApprovedCourse from './pages/AprovedCourse/AprovedCourse';
import Admin from './pages/Admin/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path='/approvedcourse' element={<ApprovedCourse />} />
        <Route path='/Admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}
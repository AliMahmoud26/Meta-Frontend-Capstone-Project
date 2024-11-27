import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reservation from "./Pages/Reservation";
import Testimonials from './components/Testimonials';
import Bookings from './Pages/Bookings';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import History from './Pages/History';
import About from './components/About';

// ProtectedRoute Component
function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Dishes />
              <Testimonials />
              <About />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/register" 
          element={<Register setIsAuthenticated={setIsAuthenticated} />} 
        />

        {/* Protected Routes */}
        <Route 
          path="/reservation" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Reservation />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/bookings" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Bookings />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/history" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <History />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/menu" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Menu />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/orders" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Orders />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

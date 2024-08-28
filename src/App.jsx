import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Reservation from "./Pages/Reservation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={
          <>
            <Hero />
            <Dishes />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;

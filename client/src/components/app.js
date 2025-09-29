import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "../pages/home";
import Footer from "./footer";
import Register from "../pages/signin/register";
import Login from "../pages/signin/login";
import My_Detail from "../pages/details";
import My_Destination from "../pages/destination";
import My_Learning from "../pages/mylearnings";
import Notification from "../pages/notification";
import Purchase_History from "../pages/traveller/purchasehistory";
import About from "../pages/about";
import CalendarHeader from "../pages/Home/Calender";
import Maplive from "../pages/Home/map/Maplive";
import Livedirect from "../pages/Home/map/Livedirect";
import Explore from "../pages/Explore/explore";
import Planner from "../pages/Planner/planner";
function App() {
  useEffect(() => {
    // Set a timeout to clear local storage after a specific time (e.g., 1 hour)
    const timeout = setTimeout(() => {
      localStorage.clear();
    }, 120 * 60 * 1000); // 1 hour in milliseconds

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Explore" element={<Explore />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Calender" element={<CalendarHeader />} />

          <Route exact path="/profile" element={<My_Detail />} />
          <Route exact path="/destinations" element={<My_Destination />} />
          <Route exact path="/learnings" element={<My_Learning />} />
          <Route exact path="/notifications" element={<Notification />} />
          <Route exact path="/Maplive" element={<Maplive />} />
          <Route exact path="/Livedirect" element={<Livedirect />} />
          <Route exact path="/planner" element={<Planner />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

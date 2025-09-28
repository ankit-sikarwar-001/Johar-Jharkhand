import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
import Dashboard from "../pages/admin/dashboard";
import User_Management from "../pages/admin/usermanagement";
import Content_Management from "../pages/admin/contentmanagement";
import Analysis from "../pages/admin/analysis";
import Analysis_Report from "../pages/artisan/analysis";
import Product_Catalog from "../pages/artisan/productcatalog";
import Product_Listing from "../pages/artisan/productlisting";
import Order_Processing from "../pages/artisan/orderprocessing";
import Seller_Dashboard from "../pages/artisan/sellerdashboard";
import CalendarHeader from "../pages/Home/Calender";
import Maplive from "../pages/Home/map/Maplive";
import Livedirect from "../pages/Home/map/Livedirect";
import Explore from "../pages/Explore/explore";
import Planner from "../pages/Planner/planner";
import Shop from "../pages/Shop/Shop";
import ShopCategory from "../pages/Shop/ShopCategory";
import men_banner from "../assets/banner.jpg";
import women_banner from "../assets/women_banner.avif";
import kids_banner from "../assets/kids_banner.jpg";
import Product from "../pages/Shop/Product";
import Cart from "../pages/Shop/Cart";

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
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/Calender" element={<CalendarHeader />} />
          <Route exact path="/profile" element={<My_Detail />} />
          <Route exact path="/destinations" element={<My_Destination />} />
          <Route exact path="/learnings" element={<My_Learning />} />
          <Route exact path="/notifications" element={<Notification />} />
          <Route exact path="/Maplive" element={<Maplive />} />
          <Route exact path="/Livedirect" element={<Livedirect />} />
          <Route exact path="/planner" element={<Planner />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          {/* Traveller Routes */}
          <Route
            exact
            path="/purchase-history"
            element={<Purchase_History />}
          />

          {/* Admin Routes */}
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/admin/user-management"
            element={<User_Management />}
          />
          <Route
            exact
            path="/admin/content-management"
            element={<Content_Management />}
          />
          <Route exact path="/admin/analysis" element={<Analysis />} />

          {/* Artisan Routes */}
          <Route
            exact
            path="/educator/product-listing"
            element={<Product_Listing />}
          />
          <Route
            exact
            path="/educator/product-catalog"
            element={<Product_Catalog />}
          />
          <Route
            exact
            path="/educator/order-processing"
            element={<Order_Processing />}
          />
          <Route
            exact
            path="/educator/seller-dashboard"
            element={<Seller_Dashboard />}
          />
          <Route
            exact
            path="/educator/analysis-report"
            element={<Analysis_Report />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Hero from "./Hero";
import ShopByCategory from "./ShopByCategory";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProductList from "./ProductList"; // Import your ProductList component

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <div>
      {/*<Navbar />  Render the Navbar */}
      {location.pathname === "/" && <Hero />}{" "}
      {/* Only show Hero on the home page */}{" "}
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<ShopByCategory />} /> {/* Use element prop */}
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </div>
  );
}
export default App;

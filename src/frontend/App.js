import "./styles/App.css";
import Hero from "./Hero.js";
import ShopByCategory from "./ShopByCategory.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProductList from "./ProductList.js"; // Import your ProductList component
import Login from "./Login.js";
import Navbar from "./Navbar.js";
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
      <Navbar />
      <Routes>
        <Route path="/login" element={Login} />
      </Routes>
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

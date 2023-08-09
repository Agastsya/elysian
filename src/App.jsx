import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header";
import NewArrivals from "./components/NewArrivals";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"newarrivals"} element={<NewArrivals />} />
          <Route path={"/products:id"} element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

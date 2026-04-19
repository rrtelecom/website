
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./components/Products";
import About from "./components/About";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import Categories from "./components/Categories";

function App() {


  return (
    <div className="bg-slate-100">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Categories />} />
          <Route path="/product/:name" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <ContactUs />
    </div>
  );
}

export default App;

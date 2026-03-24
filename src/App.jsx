import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Works from "./Pages/Works/Works.jsx";
import About from "./Pages/About/About.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

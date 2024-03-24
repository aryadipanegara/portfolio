import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/templates/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/projects" element={<Projects />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

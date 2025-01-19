import { Route, Routes } from "react-router";
import MainPage from "./Components/MainPage";
import Home from "./Components/Home";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import Project from "./Components/Projects";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element= {<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
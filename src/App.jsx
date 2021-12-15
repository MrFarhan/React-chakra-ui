import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Lectures from "./Pages/Lectures";
import Layout from "./Components/Layout";
const App = () => {

  return (
    <BrowserRouter>
    
      <Layout >
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/lectures" element={<Lectures />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

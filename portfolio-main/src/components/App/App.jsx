
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "../Header/Header";
import LegalNotice from "../LegalNotice/LegalNotice";
import Footer from "../Footer/Footer";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import ProjectPage from "../ProjectPage/ProjectPage";

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/portfolio" : "" ;
  return (
    <BrowserRouter basename={basename}>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/LegalNotice" element={<LegalNotice />} />
          <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

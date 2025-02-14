// import { Route, Routes } from "react-router-dom";
import "./App.css";
// Prime React
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // PrimeReact
import "primeicons/primeicons.css";
import { Route, Routes } from "react-router-dom";
import SCTI from "./layouts/SCTILayout";
import MainJS from "./layouts/MainJS";
import Tuzilma from "./pages/tuzilma/Tuzilma";
import NewsPage from "./components/news/NewsPage";
import DeyjeslarPage from "./components/deyjistlar/DeyjeslarPage";
import FotoGalary from "./components/galareya/FotoGalary";
import VideoGalary from "./components/galareya/VideoGalary";
import ProjectsPage from "./components/projects/ProjectsPage";
import Rahbariyat from "./components/rahbariyat/Raxbariyat";

function App() {
  return (
    <div className="App h-full ">
      <Routes>
        <Route path="/" element={<SCTI />}>
          <Route path="" element={<MainJS />} />
          <Route path="/tuzilma" element={<Tuzilma />} />
          <Route path="/rahbariyat" element={<Rahbariyat />} />
          <Route path="/newspage/:id" element={<NewsPage />} />
          <Route path="/dayjes/:id" element={<DeyjeslarPage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} />
          <Route path="/photogallery" element={<FotoGalary />} />
          <Route path="/videogallery" element={<VideoGalary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

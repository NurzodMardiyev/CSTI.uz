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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SCTI />}>
          <Route path="" element={<MainJS />} />
          <Route path="/tuzilma" element={<Tuzilma />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

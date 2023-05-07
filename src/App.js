import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBarEspañol from "./español/NavBar"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<NavBar />} />
      <Route exact path="/español" element={<NavBarEspañol />} />
    </Routes>
  );
}

export default App;

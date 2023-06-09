import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home/home";
import Landing from "./Views/Landing/landing";
import Create from "./Views/Create/create";
import Detail from "./Views/Detail/detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

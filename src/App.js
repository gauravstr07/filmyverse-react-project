import Cards from "./components/Cards";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/addmovie" element={<AddMovie />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

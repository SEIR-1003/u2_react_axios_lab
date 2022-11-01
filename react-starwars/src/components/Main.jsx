import { Route, Routes } from "react-router-dom";
import StarshipsList from "./StarshipsList";
import Planets from "./Planets";
import Characters from "./Characters";
import Films from "./Films";
import Nav from "./Nav";

export default function Main() {
  return (
    <div ClassName="main">
      <Nav />

      <Routes>
        <Route exact path="/StarshipsList" element={<StarshipsList />} />
        <Route exact path="/Planets" element={<Planets />} />
        <Route exact path="/Characters" element={<Characters />} />
        <Route exact path="/Films" element={<Films />} />
      </Routes>
    </div>
  );
}

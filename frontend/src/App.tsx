import { Route, Routes } from "react-router";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}
export default App;

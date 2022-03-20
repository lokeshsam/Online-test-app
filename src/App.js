import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/app.css";
import Home from "./Views/home";
import Login from "./Views/login";
import Section1 from "./Views/section1";
import Section2 from "./Views/section2";
import Section3 from "./Views/section3";
import Signup from "./Views/signup";
import Submit from "./Views/submit";
import Tabs from "./Views/tab";

const sendEmail = (e) => {
  e.preventDefault();
console.log(e.target);
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Tabs />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/sec1" element={<Section1 />}></Route>
          <Route exact path="/sec2" element={<Section2 />}></Route>
          <Route exact path="/sec3" element={<Section3 />}></Route>
          <Route exact path="/submit" element={<Submit />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;

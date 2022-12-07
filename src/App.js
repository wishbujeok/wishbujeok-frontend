import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create.js";
import Confirm from "./pages/Confirm.js";
import KakaoLogin from "./components/features/KakaoLogin";
import Loading from "./pages/Loading";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

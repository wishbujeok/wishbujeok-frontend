import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Create from "./pages/Create.js";
import Confirm from "./pages/Confirm.js";
import KakaoLogin from "./components/features/KakaoLogin";
import Loading from "./pages/Loading";
import "./components/shared/reset.css";
import AppLayout from "./components/layout/AppLayout";
import ScreenShot from "./components/features/ScreenShot";

import a from "./assets/img/mainPageImg.png";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/kakaoLogin" element={<KakaoLogin />} />
            <Route path="/create" element={<Create />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Router>
        {/* <ScreenShot HopeImg={a} /> */}
      </AppLayout>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Create from "./pages/Create.js";
import Confirm from "./pages/Confirm.js";
import KakaoLogin from "./components/features/KakaoLogin";
import Loading from "./pages/Loading";
import "./components/shared/reset.css";
import AppLayout from "./components/layout/AppLayout";
<<<<<<< HEAD

import Admin from "./pages/Admin";
=======
// import ScreenShot from "./components/features/ScreenShot";

// import a from "./assets/img/mainPageImg.png";
// import { appendFile } from "fs";

// const cors = require("cors");
>>>>>>> 1f9157a3665f0ae603b39e266f75da4157835044

function App() {
  // app.use(cors());
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
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </AppLayout>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Create from "./pages/Create.js";
import Confirm from "./pages/Confirm.js";
import KakaoLogin from "./components/features/KakaoLogin";
import Loading from "./pages/Loading";
// import "./components/shared/reset.css";
import AppLayout from "./components/layout/AppLayout";
import Admin from "./pages/Admin";

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
            {/* <Route path="/admin" element={<Admin />} /> */}
          </Routes>
        </Router>
      </AppLayout>
    </div>
  );
}

export default App;

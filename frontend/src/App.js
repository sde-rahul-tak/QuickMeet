import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Authentication from "./pages/authentication";
import LandingPage from "./pages/landing";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoMeetComponent from "./pages/VideoMeetComponent";
import HomeComponent from "./pages/home";
import History from "./pages/history";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<Authentication />} />
              <Route path="/home" element={<HomeComponent />} />
              <Route path='/history' element={<History/>} />
              <Route path="/:url" element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

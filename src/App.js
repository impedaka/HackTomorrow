import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Request from "./Request";
import VideoCall from "./VideoCall";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/request" element={<Request />} />
          <Route path="/videocall" element={<VideoCall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

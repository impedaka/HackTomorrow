import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Request from "./Request";
import VideoCall from "./VideoCall";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Request />} />
          <Route path="/videocall" element={<VideoCall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

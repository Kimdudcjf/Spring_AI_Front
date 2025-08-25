import { BrowserRouter, Routes, Route } from "react-router-dom";

import JoinPage from "./pages/JoinPage";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
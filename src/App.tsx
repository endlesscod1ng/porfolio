import { Header } from "./widgets/Header";
import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/skills" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

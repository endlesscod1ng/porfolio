import { Header } from "./widgets/Header";
import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          <Route
            path="/contacts"
            element={<HomePage />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

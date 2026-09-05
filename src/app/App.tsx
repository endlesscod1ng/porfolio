import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesConfig";
import { Header } from "@/widgets/Header";
import { HomePage } from "@/pages/HomePage";
// import "@/app/styles/index.scss";

function App() {
  return (
    <div className={`dark`}>
      <Header />
      <main>
        <Routes>
          {routesConfig.map((r) => {
            return (
              <Route
                key={r.path}
                path={r.path}
                element={r.element}
              />
            );
          })}
          <Route
            path="/*"
            element={<HomePage />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

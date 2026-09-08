import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesConfig";
import { Header } from "@/widgets/Header/Header";
import { HomePage } from "@/pages/HomePage";

function App() {
  return (
    <div className={`app light`}>
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

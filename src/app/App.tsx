import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesConfig";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Suspense, useState } from "react";
export type Theme = "dark" | "light";
function App() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <div className={`app ${theme}`}>
      <Header
        changeTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
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
              element={<NotFoundPage />}
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

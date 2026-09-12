import { Route, Routes } from "react-router";
import { routesConfig } from "@/shared/config/routesConfig";
import { Header } from "@/widgets/Header/Header";
import { HomePage } from "@/pages/HomePage";
import { Footer } from "@/widgets/Footer/Footer";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Suspense } from "react";

function App() {
  return (
    <div className={`app light`}>
      <Header />
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

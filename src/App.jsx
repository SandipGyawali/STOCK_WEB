import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
const Home = lazy(() => import("./Pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />

        {routes.map((data, index) =>
          data?.routes ? (
            <Route path={data.path} key={index}>
              {data.routes.map((nestedData, nIndex) => (
                <Route
                  key={nIndex}
                  path={nestedData.path}
                  element={nestedData.element}
                />
              ))}
            </Route>
          ) : (
            <Route path={data.path} key={index} element={data.element} />
          )
        )}
      </Routes>
    </Suspense>
  );
}

export default App;

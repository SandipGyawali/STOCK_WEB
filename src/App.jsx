import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const AuthPage = lazy(() => import("./Pages/AuthPage"));
const Crypto = lazy(() => import("./components/Crypto/Crypto"));
const News = lazy(() => import("./Pages/News"));
const SkeletonCard = lazy(() => import("./components/Skeleton/CardSkeleton"));
const Single = lazy(() => import("./components/Crypto/Single/Single"));
const Home = lazy(() => import("./Pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="*" />
        <Route index element={<Home />} />
        {/* <Route path="/home" element={<Hello />}></Route> */}
        <Route path="/auth/signup" element={<AuthPage />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/skeleton" element={<SkeletonCard />} />
        <Route path="/market">
          <Route path="news" index element={<News />} />
          <Route path="crypto" element={<Crypto />} />
          <Route path="crypto/single" element={<Single />} />
        </Route>
        <Route />
      </Routes>
    </Suspense>
  );
}

export default App;

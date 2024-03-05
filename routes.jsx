import AuthPage from "./src/Pages/AuthPage";
import Crypto from "./src/components/Crypto/Crypto";
import Single from "./src/components/Crypto/Single/Single";
import SkeletonCard from "./src/components/Skeleton/CardSkeleton";

export const routes = [
  {
    path: "/auth/signup",
    element: <AuthPage />,
  },
  {
    path: "/auth/login",
    element: <AuthPage />,
  },
  {
    path: "/skeleton",
    element: <SkeletonCard />,
  },
  {
    path: "/market",
    routes: [
      {
        path: "crypto",
        element: <Crypto />,
      },
      {
        path: "crypto/single",
        element: <Single />,
      },
    ],
  },
];

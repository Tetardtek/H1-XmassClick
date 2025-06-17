import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import { WildCoinProvider } from "./components/WildCoin/WildCoinContext";
import Ameliorations from "./components/WildCoin/Amelioration";
import Boutique from "./pages/Boutique";
import Achievements from "./pages/Achievements";
import Legal from "./pages/Legal";
import Cookie from "./pages/Cookie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/upgrade",
        element: <Ameliorations />,
      },
      {
        path: "/boutique",
        element: <Boutique />,
      },
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/mentionslegales",
        element: <Legal />,
      },
      {
        path: "/cookies",
        element: <Cookie />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <WildCoinProvider>
    <RouterProvider router={router} />
  </WildCoinProvider>
);

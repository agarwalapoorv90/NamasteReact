import ReactDOM from "react-dom/client";
import { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("../src/components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Apoorv Agarwal",
    email: "a@a.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Body /> },
      {
        path: "about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

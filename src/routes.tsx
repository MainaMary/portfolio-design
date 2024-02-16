import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
const appRoutes = [
  {
    component: <Landing />,
    path: "/",
  },
  {
    component: <About />,
    path: "/about",
  },
  {
    component: <Contact />,
    path: "/contact",
  },
];

const AllRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route element={route.component} path={route.path} />
      ))}
    </Routes>
  );
};

export default AllRoutes;

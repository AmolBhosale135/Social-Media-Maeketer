import React from "react";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";
import Services from "./Services";
import Blogs from "./Blogs";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      {/* <Body />
      <About />
      <Services />
      <Blogs />
      <Contact /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

import React from "react";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";
import Services from "./Services";
import Blogs from "./Blogs";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);
root.render(<App />);

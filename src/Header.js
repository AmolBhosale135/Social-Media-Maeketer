import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-4 mb-8 px-8 bg-[#010E54]">
        <div>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              version="1.0"
              viewBox="0 0 319 158"
              fill="#fff"
            >
              <path d="M43 38.4c-.6.8-3.1 2.2-5.5 3.1-4.1 1.6-4.3 1.9-4.3 5.9.1 3-3 12-11.6 33.6-12.9 32.4-15.9 38.7-19.3 40.3-1.3.6-2.3 1.7-2.3 2.6 0 1.4 1.7 1.6 11.7 1.5 10.2 0 11.8-.3 12.1-1.7.2-1.1-.3-1.7-1.5-1.7-1 0-2.9-.7-4.1-1.6-3.2-2.2-2.8-6.1 1.6-19.4l3.9-11.5H53.4l3.8 10c6.1 16.1 6.2 19.6.2 22.1-1.9.8-3.4 2-3.4 2.7 0 .9 3.8 1.2 15.6 1 16.6-.1 20.3-1.1 14.2-3.6-6-2.5-6.9-4.3-23.4-44.3C49.9 51.7 47 43.4 47 39.3c0-2.6-2.1-3.1-4-.9zM45 68l5.7 15H38.9c-6.6 0-11.9-.3-11.9-.6 0-1.6 11.4-30.3 11.9-29.9.2.3 3 7.3 6.1 15.5zM81.6 37.9c-.3.5-.8 6.6-1 13.6-.4 12.4-.4 12.6 1.5 10.9 1-.9 1.9-2.6 1.9-3.6 0-3.7 2.9-8.7 5.9-10.2 1.7-.9 6.5-1.9 10.6-2.3l7.6-.6-.3 36c-.3 33.5-.4 36.2-2.2 38.1-1 1.2-2.8 2.2-3.9 2.4-1.2.2-2.3 1-2.5 1.8-.2 1.3 1.9 1.5 14.9 1.4 9.4-.1 15.5-.6 16.1-1.2 1.2-1.2.7-1.5-4.4-2.6-5.5-1.2-5.8-3.1-5.8-41.2V45.7l7.7.7c4.2.4 8.9 1.4 10.5 2.2 3.4 1.8 5.8 6.7 5.8 11.9 0 3.4 1.2 4.6 2.6 2.4.8-1.4 1.2-25.9.4-25.9-.3 0-1.7.8-3 1.7-2.2 1.6-5.4 1.8-29.5 1.8-24 0-27.4-.2-29.7-1.7-1.5-1-2.9-1.4-3.2-.9zM154.8 41.7c-.8 1-.4 1.4 2 1.9 1.7.3 4.1 1.7 5.4 3.1 2.3 2.4 2.3 2.8 2.8 32.1.5 28.5.6 29.9 2.8 34.4 5 10.1 14.2 14.5 28.8 13.5 13.6-.8 24.5-7.3 29.5-17.5 2.2-4.5 2.4-6.1 2.9-32.7.3-15.4.9-28.7 1.4-29.7.4-.9 2-2.1 3.6-2.8 1.6-.7 3.1-1.7 3.3-2.3.3-.9-3.2-1.2-13.1-1.2-9.7 0-13.6.3-13.9 1.2-.3.7.8 1.5 2.4 1.9 5.7 1.2 6.4 1.6 8.1 4.7 1.5 2.8 1.7 6.4 1.7 28.7 0 25.4 0 25.6-2.6 30.5-3.7 7.3-9.6 10.7-19.7 11.2-6.6.4-8.3.1-12.2-1.9-4.9-2.5-8.4-7-10-12.7-1.3-4.7-1.3-53.1 0-56.6.6-1.5 2.2-3 4-3.6 1.6-.6 3-1.6 3-2.2 0-1.8-28.7-1.7-30.2 0zM247.6 41.7c-.3.7 1 1.7 3 2.3 6.5 2.2 6.4 1.8 6.4 39.5 0 36.3 0 36.3-4.9 38.8-5.6 2.8-3 3.2 19.1 3.2 12.3 0 26.1.2 30.8.5l8.5.5.6-6c.3-3.3 1-8.6 1.4-11.9.7-5.6.7-5.8-1.3-4.7-1.1.6-2.3 2.5-2.7 4.2-.9 4.1-6.6 9.5-11.2 10.8-4.9 1.4-16.7 1.4-21.6 0-6.6-1.8-6.9-3.5-6.5-38.8.3-32.8.5-33.9 5.5-36.3 5.5-2.7 3.4-3.3-11.7-3.3-10.7 0-15.1.3-15.4 1.2z" />
            </svg>
          </a>
        </div>
        <div>
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400  uppercase">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="border-b border-gray-400  uppercase">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="border-b border-gray-400  uppercase">
                    <Link to="/service">Service</Link>
                  </li>
                  <li className="border-b border-gray-400  uppercase">
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li className="border-b border-gray-400  uppercase">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center ">
              <li className="text-[#fff] font-normal uppercase">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[#fff] font-normal uppercase">
                <Link to="/about">About</Link>
              </li>
              <li className="text-[#fff] font-normal uppercase">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-[#fff] font-normal uppercase">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="text-[#fff] font-normal uppercase">
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button className="bg-[#c62e46] hover:bg-[#c62e46] text-white font-medium py-2 px-4 rounded-lg">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
      <Outlet />
    </>
  );
}

import { useState } from "react";
import {BsSearch} from "react-icons/bs"

interface NavProps {
  logoUrl: string;
}

const Navbar: React.FC<NavProps> = ({ logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // =============================  main container  ================ 
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-10">

            {/* ====================  TOGGLE SECTION  ================== */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              //    NOTE: This is the button that toggles the menu
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex bg-red-500 items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* */}
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/*=======================  NAV  ITEMS  ON DESK  =========================*/}
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
            {/* LOGO   */}
            <div className="flex-shrink-0">
              <img
                className="block  md:hidden h-8 w-auto"
                src={logoUrl}
                alt="dev.to"
              />
              <img
                className="hidden md:block h-8 w-auto"
                src={logoUrl}
                alt="dev.to"
              />
            </div>
            {/* =======================  END OF THE LOGO SECTION===============================  */}
            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-4">

                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700"
                >
                  Videos
                </a>

                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700"
                >
                  Podcasts
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700"
                >
                  Products
                </a>

                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700"
                >
                  Resources
                </a>

                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          {/* END OF THE NAVBAR IN THE DESKTOP VIEW  */}

          {/*=======================  SEARCH  BAR  ==========================   */}
          <div className="flex items-center">
            {/* Search icons for the search through content  */}
              <input type="search" />
            <div className="flex-shrink-0">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Search</span>
               <BsSearch/>
              </button>
            </div>

            {/* ACCOUNT  */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button className="bg-white py-2 px-4 border border-transparent rounded-md text-sm font-medium text-gray-900 hover:bg-gray-50">
                  Log in
                </button>
                <button className="bg-white py-2 px-4 border border-transparent rounded-md text-sm font-medium text-gray-900 hover:bg-gray-50">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
          >
            Home
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Topics
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Videos
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            Podcasts
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            Products
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            Resources
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            About
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/2331?v=4"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                Tom Preston-Werner
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                tom@github.com
              </div>
            </div>
            <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 14l-3-3m0 0l-3-3m3 3V8a7 7 0 00-7-7M9 17a2 2 0 002 2h2a2 2 0 002-2m-4 0a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2m-4 0a2 2 0 00-2-2H3a2 2 0 002 2v2a2 2 0 00-2 2h2a2 2 0 002-2"
                />
              </svg>
            </button>
          </div>

          {/* ===============================  PROFILE IN SMALL DEVICE ===============================  */}
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Settings
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
          {/* END OF THE PROFILE */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

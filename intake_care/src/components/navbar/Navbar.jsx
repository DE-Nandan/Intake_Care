import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../../assets/favicon.ico"
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from '../../hooks/useAuthContext';



export default function Navbar() {

  const { logout } = useLogout()
  const { user } = useAuthContext()


  const handleClick = () => {
    logout()
  }






  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Nav">
      <nav className="bg-slate-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
  <div className="ml-10 flex items-baseline space-x-4">
    {/* <p className="text-sky-400 text-lg">Hello!</p> */}
    <Link
      to="/"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Dashboard
    </Link>

    <Link
      to="/daily"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Daily Requirements
    </Link>

    <Link
      to="/myarea"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      My Area
    </Link>
    <Link
      to="/chat"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Chat
    </Link>
    <Link
      to="/payment"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Payment
    </Link>
    <Link
      to="/map"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Nearby Gym
    </Link>
    <Link
      to="/stats"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Stats
    </Link>

  

    <a
      href="https://de-nandan.github.io/port_react/"
       target="_blank"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      About
    </a>

    <a
      href="#"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={handleClick}
    >
      Sign Out
    </a>

    <div className="ml-auto text-sky-400 text-lg px-10 ">
      Welcome {user.email}!
    </div>
  </div>
</div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
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
                ) : (
                  <svg
                    className="block h-6 w-6"
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
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <p class="text-sky-400 pl-3">Welcome,&nbsp;{user.email}!</p>
                <Link
      to="/"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Dashboard
    </Link>

    <Link
      to="/daily"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Daily Requirements
    </Link>

    <Link
      to="/myarea"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      My Area
    </Link>
    <Link
      to="/chat"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Chat
    </Link>
    <Link
      to="/payment"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Payment
    </Link>
    <Link
      to="/map"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Nearby Gym
    </Link>
    <Link
      to="/stats"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Stats
    </Link>

  

    <a
      href="https://de-nandan.github.io/port_react/"
       target="_blank"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      About
    </a>

    <a
      href="#"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={handleClick}
    >
      Sign Out
    </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">hola</h1>
        </div>
      </header> */}
      {/* <main>
        <div className="bg-white max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {obj.email}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">hi</div>
          </div> */}
      {/* <!-- /End replace --> */}
      {/* </div>
      </main> */}
    </div>

  );
}

// export default Navbar
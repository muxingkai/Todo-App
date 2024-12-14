import { Link, Outlet, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Layout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState<boolean>(false)
  function handleTheme(){
    setTheme(!theme);
    document.body.classList.toggle("dark");
  }
  return (
    <>
      <div className="min-h-screen lg:max-w-xl mx-auto bg-gray-200 dark:bg-gray-900 flex flex-col divide-y divide-gray-300 dark:divide-gray-800 shadow-md">
        <header>
          <ul className="flex items-center justify-between gap-2">
            <li>
              <Link
                to="/"
                className={pathname !== "/" ? "block px-4 py-2 text-gray-700 dark:text-gray-400 capitalize hover:font-medium" : "hidden"}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className={pathname !== "/create" ? "block px-4 py-2 text-gray-700 dark:text-gray-400 capitalize hover:font-medium" : "hidden"}
              >
                create
              </Link>
            </li>
          </ul>
        </header>
        <div className="flex-1">
          <Outlet />
        </div>
        <footer className="flex items-center justify-between p-2">
          <p className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            Made with <Icon icon="mdi:heart" className="text-red-600" /> by ibrahim
          </p>
          <label
            htmlFor="AcceptConditions"
            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-red-500">
            <input type="checkbox" id="AcceptConditions" className="peer sr-only" checked={theme} onChange={handleTheme} />

            <span
              className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
            ></span>
          </label>
        </footer>
      </div>
    </>
  );
}
export default Layout;

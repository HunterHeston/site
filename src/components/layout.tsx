import { useState, type ReactNode } from "react";
import Navigation from "./navigation";

enum Theme {
  LIGHT = "",
  DARK = "dark",
}

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(Theme.LIGHT);
  return (
    <div className={darkMode}>
      <div className="flex min-h-screen w-screen flex-col items-center bg-zinc-50 dark:bg-zinc-950">
        <div className="min-h-screen w-screen bg-white dark:bg-zinc-900 dark:text-white md:w-3/4 md:px-5">
          <Navigation>
            <button
              onClick={() =>
                setDarkMode(darkMode === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
              }
              className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            >
              {darkMode === Theme.LIGHT ? "🌙" : "☀️"}
            </button>
          </Navigation>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

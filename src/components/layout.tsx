import { useState, type ReactNode, useEffect, use } from "react";
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

  // only run once on mount
  useEffect(() => {
    setDarkMode(getSystemTheme());
  }, []);

  // run anytime darkMode changes
  useEffect(() => {
    setDarkModeOnBody(darkMode);
  }, [darkMode]);

  return (
    <div>
      <div className="flex min-h-screen w-screen flex-col items-center bg-zinc-50 duration-300 dark:bg-zinc-950">
        <div className="min-h-screen w-screen bg-white duration-300 dark:bg-zinc-900 dark:text-white md:w-5/6 md:px-5">
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

function getSystemTheme() {
  if (typeof window !== "undefined") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    return systemTheme.matches ? Theme.DARK : Theme.LIGHT;
  }
  return Theme.LIGHT;
}

// actually set the dark mode on the body element
// this has a external effect on the whole page
function setDarkModeOnBody(darkMode: string) {
  document.body.classList.toggle("dark", darkMode === "dark");
}

export default Layout;
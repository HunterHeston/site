import { useState, type ReactNode, useEffect } from "react";
import Navigation from "./navigation";

const THEME_CONSTANT = "theme";

enum Theme {
  LIGHT = "",
  DARK = "dark",
}

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(Theme.LIGHT);

  // set the theme the first this component is rendered.
  // It does mean that the default light theme will "flash" before the dark theme is applied.
  useEffect(() => {
    const theme = getTheme();
    setDarkModeOnBody(theme);
    setDarkMode(theme);
  }, []);

  return (
    <div>
      <div className="flex min-h-screen w-screen flex-col items-center bg-zinc-50 duration-300 dark:bg-zinc-950">
        <div className="min-h-screen w-screen bg-white duration-300 dark:bg-zinc-900 dark:text-white md:w-5/6 md:px-5">
          <Navigation>
            <button
              onClick={() => {
                const nextTheme =
                  darkMode === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
                setDarkMode(nextTheme);
                setDarkModeOnBody(nextTheme);
              }}
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

function getTheme() {
  const localTheme = getThemeFromLocalStorage();
  if (localTheme !== null) {
    console.log("Local: ", localTheme);
    return localTheme;
  }

  const systemTheme = getSystemTheme();
  if (systemTheme !== null) {
    return systemTheme;
  }

  return Theme.LIGHT;
}

function getThemeFromLocalStorage() {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem(THEME_CONSTANT) as Theme;
}

function getSystemTheme() {
  if (typeof window === "undefined") {
    return null;
  }
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  return systemTheme.matches ? Theme.DARK : Theme.LIGHT;
}

// actually set the dark mode on the body element
// this has a external effect on the whole page
function setDarkModeOnBody(darkMode: string) {
  console.log("Setting dark mode: ", darkMode);
  document.body.classList.toggle("dark", darkMode === "dark");
  localStorage.setItem(THEME_CONSTANT, darkMode);
}

export default Layout;

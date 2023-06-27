import { type ReactNode } from "react";
import Navigation from "./navigation";
import { ThemeProvider } from "./themeProvider";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <ThemeProvider>
    <div className="flex min-h-screen w-screen flex-col items-center bg-zinc-50">
      <div className="min-h-screen w-screen bg-white md:w-3/4 md:px-5">
        <Navigation />
        <div>{children}</div>
      </div>
    </div>
  </ThemeProvider>
);

export default Layout;

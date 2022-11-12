
import React from "react";
import type { AppProps } from "next/app";
import { darkTheme } from "../stitches.config";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const isDarkTheme: boolean = darkTheme.className === "t-dyIyW" ? true : false;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} isDarkTheme={darkTheme} />
    </ThemeProvider>
  );
};

export default MyApp;
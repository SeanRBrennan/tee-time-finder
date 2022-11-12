import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      text: "#2b2b2b",
      background: "#efefef",
      backgroundLight: "#e6e3e3",
      glass: "rgba(255, 255, 255, 0.5)",
      code: "#161821",
    },
    space: {
      xxs: "4px",
      xs: "8px",
      s: "12px",
      base: "16px",
      l: "32px",
      xl: "50px",
      xxl: "80px",
      max: "120px",
    },
    fonts: {
      base: "'Lato', sans-serif;",
    },
    fontSizes: {
      s: "12px",
      base: "16px",
      l: "22px",
      xl: "35px",
      xxl: "50px",
      xxxl: "80px",
      max: "120px",
    },
    lineHeights: {
      s: "14px",
      base: "18px",
      l: "24px",
      xl: "38px",
      xxl: "55px",
      xxxl: "85px",
      max: "125px",
    },
    fontWeights: {
      thin: 100,
      regular: 400,
      black: 900,
    },
    letterSpacings: {},
    sizes: {
      s: "800px",
      base: "1440px",
    },
    borderWidths: {
      base: "2px",
    },
    borderStyles: {},
    radii: {
      s: "2px",
      base: "4px",
      l: "8px",
    },
    shadows: {
      base: "rgba(0, 0, 0, .25)",
    },
    zIndices: {
      s: "1",
      m: "50",
      l: "0",
    },
    transitions: {},
  },
  media: {
    xs: "(max-width: 600px)",
    s: "(max-width: 768px)",
    m: "(min-width: 769px)",
    l: "(min-width: 1024px)",
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "#efefef",
    background: "rgb(17, 19, 26)",
    backgroundLight: "#1c1f2b",
    glass: "rgba(0, 0, 0, 0.5)",
    code: "rgba(0, 0, 0, 0.5)",
  },
});

const GlobalStyles = globalCss({
  "body.app": {
    fontFamily: "$base",
    backgroundColor: "$background",
    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    color: "$text",
    fontSize: "$base",
    lineHeight: "$base",
  },
  ".wrapper": {
    padding: "$l $base",

    "@l": {
      padding: "$xl $base",
    },
  },
  h1: {
    fontWeight: "$black",
    fontSize: "$xxl",
    lineHeight: "1",
    marginBottom: "$base",
    "@l": {
      fontSize: "$xxxl",
      lineHeight: "$xxxl",
    },
  },
  h2: {
    fontWeight: "$black",
    fontSize: "$xl",
    lineHeight: "$xl",
    marginBottom: "$base",
    "@l": {
      fontSize: "$xxl",
      lineHeight: "$xxl",
    },
  },
  h3: {
    fontWeight: "$black",
    fontSize: "$l",
    lineHeight: "$l",
    marginBottom: "$base",
    "@l": {
      fontSize: "$xl",
      lineHeight: "$xl",
    },
  },
  h4: {
    fontWeight: "$black",
    fontSize: "$base",
    lineHeight: "$base",
    marginBottom: "$base",
    "@l": {
      fontSize: "$l",
      lineHeight: "$l",
    },
  },
  p: {
    marginBottom: "$base",
  },
  ul: {
    paddingLeft: "$base",
  },
  ".constraint": {
    maxWidth: "$base",
    margin: "0 auto",
  },
});

GlobalStyles();
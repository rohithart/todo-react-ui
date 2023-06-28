import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#673ab7",
      light: "#f97830",
      dark: "#ea5000",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#FFB300",
      light: "#ffc233",
      dark: "#cb9000",
    },
  },
});
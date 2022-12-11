import { ThemeProvider } from "@mui/material";
import "../styles/globals.scss";
import { theme } from "../themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

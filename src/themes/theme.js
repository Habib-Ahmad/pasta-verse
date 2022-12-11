import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },

  palette: {
    primary: {
      main: "#851e70",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          fontWeight: 500,
          boxShadow: "none",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // backgroundColor: "#ffffff05",
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

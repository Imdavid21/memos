import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: "#000000", // Dark black background
        },
        text: {
          primary: "#f0f0f0", // Faded white text
        },
      },
    },
  },
  components: {
    JoyButton: {
      defaultProps: {
        size: "sm",
      },
    },
    JoyInput: {
      defaultProps: {
        size: "sm",
      },
    },
    JoySelect: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        listbox: {
          zIndex: 9999,
        },
      },
    },
    JoyAutocomplete: {
      styleOverrides: {
        listbox: {
          zIndex: 9999,
        },
      },
    },
  },
});

export default theme;

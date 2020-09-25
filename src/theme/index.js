/**
 * Theme for applying consistent styling to the app
 */

export default {
  /**
   * Font
   */
  font: {
    size: {
      xxs: "12px",
      xs: "13px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
  },

  /**
   * Colors
   */
  colors: {
    black: "#000",
    white: "#fff",
    body: "#f7f7f7",

    primary: {
      light: "#9b9b9b",
      main: "#949494",
      dark: "#4a4a4a",
      contrastText: "#fff",
    },

    secondary: {
      light: "#fa5238",
      main: "#fb4226",
      dark: "#ce3017",
      contrastText: "#fff",
    },

    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },

    border: {
      light: "#f5f5f5",
      main: "#e0e0e0",
      dark: "#bdbdbd",
    },

    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },

    info: "#4169E1",
    success: "#34a853",
    warning: "#FFB818",
    err: "#f44336",

    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },

  /**
   * Shadows
   */
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    md: "rgba(0, 0, 0, 0.3) 0px 1px 8px 0px",
    lg: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    xl: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },

  /**
   * Breakpoints
   */
  screen: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
    cuztom: "",
  },

  /**
   * Spacing
   */
  spacing: {
    none: 0,
    xxs: "5px",
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "60px",
  },

  /**
   * Border radius
   */
  radius: {
    sm: "3px",
    md: "6px",
    lg: "12px",
  },

  /**
   * z-index
   */
  zIndex: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
  },

  /**
   * Transition
   */
  transition: {
    duration: "0.5s",
  },
};

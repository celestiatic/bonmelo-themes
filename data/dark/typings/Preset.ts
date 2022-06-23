import { TypeThemeData } from "../../typings/ThemeData";


const themeData: TypeThemeData = {
  metadata: {
    nameId: "dark",
    name: "Dark",
    creator: "lav's husband",
    description: "A dark theme for the Bonmelo client.",
    tags: ["dark"],
    version: "1.0.0",
  },
  dark: {
    accent: "#28282B",
    background: "#28282B",
    primaryBackground: "#A9A9A9",
    chatBackground: "#A9A9A9",
    foreground: "#A9A9A9",
    secondaryForeground: "#000",
    messageBox: "#A9A9A9",
    mention: "#AA336A",
    success: "#65E572",
    warning: "#FAA352",
    error: "#ED4245",
    hover: "rgba(0,0,0,0.05)",
    primaryHeader: '#A9A9A9'
  },
};

export { themeData };

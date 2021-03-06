import { TypeThemeData } from "../../typings/ThemeData";


const themeData: TypeThemeData = {
  metadata: {
    nameId: "light",
    name: "Light",
    creator: "lav",
    description: "A light theme for the Bonmelo client.",
    tags: ["light"],
    version: "1.0.0",
  },
  light: {
    accent: "#F05D46",
    background: "#D0D4F8",
    primaryBackground: "#fff",
    chatBackground: "#fff",
    foreground: "#4E4F5F",
    secondaryForeground: "#000",
    messageBox: "#FFFCE8",
    mention: "rgba(251,255,0,0.1)",
    success: "#65E572",
    warning: "#FAA352",
    error: "#ED4245",
    hover: "rgba(0,0,0,0.05)",
    primaryHeader: '#fff'
  },
};

export { themeData };
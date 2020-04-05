import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Lato"
  ],
  bodyFontFamily: ["Lato", "Georgia", "serif"]
})
// Output CSS as string.
// typography.toString()

// Insert styles directly into the <head>
// typography.injectStyles();
export default typography

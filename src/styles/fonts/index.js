import NextLocalFont from "next/font/local";

const PPraderFont = NextLocalFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "../../assets/fonts/PPRader-Regular.otf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/PPRader-Regular.otf",
      weight: "500",
    },
    {
      path: "../../assets/fonts/PPRader-Regular.otf",
      weight: "700",
    },
  ],
});

const GilroyFont = NextLocalFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    {
      path: "../../assets/fonts/Gilroy-Light.otf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/Gilroy-ExtraBold.otf",
      weight: "700",
    },
  ],
});

export { PPraderFont, GilroyFont };

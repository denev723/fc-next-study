import { Noto_Sans, Baskervville } from "next/font/google";
import nextLocalFont from "next/font/local";

const gilroy = nextLocalFont({
  src: [
    {
      path: "./Gilroy/Gilroy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gilroy/Gilroy-SemiBold.otf",
      weight: "500",
      style: "normal",
    },
  ],
  adjustFontFallback: "Times New Roman",
  preload: true,
  fallback: ["system-ui"],
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui"],
  preload: true,
  adjustFontFallback: true,
});

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["system-ui"],
  preload: true,
  adjustFontFallback: true,
});

export { gilroy, noto_sans, baskervville };

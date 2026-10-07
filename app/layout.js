import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit  = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
  variable: "--next-outfit",
  
});
const ovo  = Ovo({
  subsets: ["latin"], weight: ["400"],
  variable: "--next-ovo",

  
});

export const metadata = {
  title: "Nick Soltau | Frontend Developer",
  description:
    "Frontend developer based in Ohio, building with React and Next.js. See my projects, background, and how to reach me.",
};

// Runs in <head> before the first paint, so the right theme is on <html>
// before the browser draws anything. A saved choice wins; with no saved
// choice, follow the visitor's OS setting.
const themeScript = `
(function () {
  try {
    var saved = localStorage.theme;
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (saved !== 'light' && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (

<html className="scroll-smooth"
  lang="en" suppressHydrationWarning>
  <head>
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  </head>
   <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
      {children}
    </body>
</html>

  );
}

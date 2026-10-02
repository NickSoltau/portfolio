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
  title: "Portfolio",
  description: "Software Dev Portfolio for Nick Soltau",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth"
      lang="en">
       <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}>
          {children}
        </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import PreventZoom from "./components/PreventZoom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Rubén",
  description: "Portfolio Rubén",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body className={`${inter.className}  `}>
        <PreventZoom />
        <div className="font-montserrat">{children}</div>
      </body>
    </html>
  );
}

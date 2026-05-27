import "./globals.css";
import { siteConfig } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: `${siteConfig.title} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

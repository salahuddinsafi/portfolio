import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Home/Footer/Footer";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salahuddin Safi",
  description: "This is Salahuddin Safi Protfoli website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
      <Analytics/>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

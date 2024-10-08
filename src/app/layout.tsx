// src/app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Providers"; // Import the Providers component

const hsbcFont = localFont({
  src: "./fonts/UniversNext.woff",
  variable: "--font-hsbc-font",
  weight: "100 900",
});

export const metadata = {
  title: "HSBC MyDay",
  description: "Resource Booking Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hsbcFont.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

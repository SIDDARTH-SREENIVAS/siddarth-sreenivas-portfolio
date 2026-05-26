import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddarth Sreenivas | Portfolio",
  description:
    "Minimalist, professional portfolio with interactive hero and project highlights.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


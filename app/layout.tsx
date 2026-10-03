import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishnu Vikas Maggam | AI & ML Developer",
  description:
    "Portfolio of Vishnu Vikas Maggam, a Computer Science Engineering student interested in AI, machine learning, application development, and innovative technology.",
  openGraph: {
    title: "Vishnu Vikas Maggam | AI & ML Developer",
    description:
      "Portfolio of Vishnu Vikas Maggam, a Computer Science Engineering student interested in AI, machine learning, application development, and innovative technology.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.jpeg", type: "image/jpeg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#070b14",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

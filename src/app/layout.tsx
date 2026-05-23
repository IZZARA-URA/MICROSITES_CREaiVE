import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

import Sound from "./Sound";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MICROSITES | CENTRAL BEUATY AWARDS 2024 | Powered by Creaive.ai",
  description: "Microsites Power by Creaive.ai",
  // viewport: "viewport",
  // content: "width=device-width, user-scalable=no",
};

// export type ViewportLayout = {
//   width?: string | number;ห
//   height?: string | number;
//   initialScale?: 1;
//   minimumScale?: 1;
//   maximumScale?: 1;
//   userScalable?: boolean;
//   viewportFit?: 'auto' | 'cover' | 'contain';
//   interactiveWidget?: 'resizes-visual' | 'resizes-content' | 'overlays-content';
// };


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0,
  minimumScale: 0,
  maximumScale: 0,
  viewportFit: 'cover',
  userScalable: false,
  // interactiveWidget: 'overlays-content',
  // layout: viewportLayout, // Example usage of custom viewport layout
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </head>

      <body className={`${inter.className} bg-white`}>
        <Sound muted={true} />
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden bg-white">
          <div
            className="relative overflow-hidden shrink-0 flex items-center justify-center max-h-screen max-w-screen py-4"
            style={{ aspectRatio: "1440 / 2560", height: 2560, maxHeight: "100vh", maxWidth: "100vw" }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}



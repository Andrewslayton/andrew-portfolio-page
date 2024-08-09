import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientComponent from "./clientComponent";


export const metadata: Metadata = {
  title: "Andrew Slayton's Personal Website",
  description:
    "Explore Andrew Slayton's personal portfolio with interactive 3D elements.",
  openGraph: {
    type: "website",
    url: "https://andrewslayton.dev/",
    title: "Andrew Slayton's Personal Website",
    description:
      "Explore Andrew Slayton's personal portfolio with interactive 3D elements.",
    images: [
      {
        url: "/meta.png",
        width: 800,
        height: 600,
        alt: "Andrew Slayton Portfolio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Slayton's Personal Website",
    description:
      "Explore Andrew Slayton's personal portfolio with interactive 3D elements.",
    images: [
      {
        url: "/meta.png",
        alt: "Andrew Slayton Portfolio Image",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientComponent/>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
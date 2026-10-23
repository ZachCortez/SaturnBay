import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SaturnBay | One Vision. Many Worlds.", description: "Technology, motorsports, merchandise and community. Discover the SaturnBay universe." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }

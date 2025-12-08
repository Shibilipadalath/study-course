import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Momentor",
  description:
    "Transform Your Future With Knowledge",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/itc-stone-serif"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/itc-stone-sans"
        />
      </head>
      <body className="font-primary antialiased">
        <div className="min-h-screen w-full pt-16">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}

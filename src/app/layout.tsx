import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GUERDANQI | Shantou Nanmao Knitting Industry Co., Ltd.",
  description: "Shantou Nanmao Knitting Industry Co., Ltd. is located in Shantou City, Guangdong Province, China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

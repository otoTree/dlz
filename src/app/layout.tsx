import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wholesale Underwear & Shapewear | OEM Manufacturer - GUIDANERQI",
  description: "Factory Direct: Seamless Panties $0.8/pc, Compression Bodysuits $3.5/pc. Custom bras, thongs, postpartum girdles. 30+ product categories. MOQ 500pcs. Export to 50+ countries.",
  keywords: [
    // 核心产品词
    "seamless underwear wholesale",
    "cotton panties manufacturer",
    "shapewear bodysuit supplier",
    "compression garments factory",
    "invisible panty line underwear",
    
    // 细分品类
    "postpartum shapewear",
    "waist trainer manufacturer",
    "seamless bras OEM",
    "mesh lingerie sets",
    "breathable briefs",
    
    // 价格导向词
    "low MOQ underwear factory",
    "bulk shapewear supplier",
    "cheap lingerie manufacturer",
    "underwear wholesale prices",
    
    // 地域+产品组合
    "Gurao seamless underwear",
    "China shapewear exporter",
  ],
  openGraph: {
    title: "Underwear Catalog: 500+ Styles from $0.5/pc | GUIDANERQI",
    description: "Download 2024 Lingerie Catalog: Bras $0.7-1.2, Panties $0.5-0.9, Shapewear $1.8-4.5. Custom packaging & labeling available.",
    images: [{
      url: "https://example.com/product-catalog-cover.jpg",
    }],
  }
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

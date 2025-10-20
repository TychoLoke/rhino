import "./globals.css";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "RhinoDicks.com — The Horn of Satirical Truth",
  description:
    "A satire newsroom celebrating the metaphorical might of the rhinoceros. Oversized bravado, zero explicit anatomy.",
  metadataBase: new URL("https://rhinodicks.com"),
  openGraph: {
    title: "RhinoDicks.com — The Horn of Satirical Truth",
    description:
      "A satire newsroom celebrating the metaphorical might of the rhinoceros. Oversized bravado, zero explicit anatomy.",
    url: "https://rhinodicks.com",
    siteName: "RhinoDicks.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RhinoDicks.com — The Horn of Satirical Truth",
    description:
      "A satire newsroom celebrating the metaphorical might of the rhinoceros. Oversized bravado, zero explicit anatomy.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

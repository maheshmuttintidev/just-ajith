import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Just Ajith - Happy Birthday",
  description: "Wish you a very happy birthday Just Ajith",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://just-ajith.maheshmuttintidev.in"),
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  metadataBase: new URL("https://just-ajith.maheshmuttintidev.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Just Ajith - Happy Birthday",
    description: "Wish you a very happy birthday Just Ajith",
    url: "https://just-ajith.maheshmuttintidev.in",
    siteName: "Friends Birthday",
    locale: "en",
    type: "website",
    images: ["/brand_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Ajith - Happy Birthday",
    description: "Wish you a very happy birthday Just Ajith",
    creator: "@MaheshMuttinti",
    images: ["/brand_banner.png"],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[url('/cosmic-background-with-colorful-laser-lights-perfect-digital-wallpaper.jpg')] bg-cover bg-no-repeat bg-center">
        {children}
      </body>
    </html>
  );
}

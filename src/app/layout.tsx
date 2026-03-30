import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "uvibes",
  description: "Transformez l'expérience collaborateur grâce au partage de connaissances",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

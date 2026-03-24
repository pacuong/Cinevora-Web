import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
import PublicLayout from "../components/PublicLayout";

export const metadata: Metadata = {
  title: {
    default: "Metiz Cinema",
    template: "%s | Metiz Cinema",
  },
  description: "Metiz Cinema website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <PublicLayout>{children}</PublicLayout>
        </div>
      </body>
    </html>
  );
}
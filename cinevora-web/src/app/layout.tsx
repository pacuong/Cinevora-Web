import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
import PublicLayout from "../components/PublicLayout";
import ToastProvider from "@/src/components/ToastProvider";

export const metadata: Metadata = {
  title: {
    default: "Metiz Cinema",
    template: "%s ",
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
        <ToastProvider>
          <PublicLayout>{children}</PublicLayout>
        </ToastProvider>
      </body>
    </html>
  );
}

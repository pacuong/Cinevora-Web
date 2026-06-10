import type { Metadata } from "next";
import "./globals.css";
import "../styles/styles.css";
import PublicLayout from "../components/PublicLayout";
import ToastProvider from "@/src/components/ToastProvider";

export const metadata: Metadata = {
  title: {
    default: "Cinevora",
    template: "%s ",
  },
  description: "Cinevora website",
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

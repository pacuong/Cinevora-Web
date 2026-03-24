import "./globals.css";
import "../styles/styles.css";
import PublicLayout from "../components/PublicLayout";

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

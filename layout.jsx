import "./globals.css";

export const metadata = {
  title: "Woodenpin Official",
  description: "Roti hangat dari dapur penuh cinta - Bogor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
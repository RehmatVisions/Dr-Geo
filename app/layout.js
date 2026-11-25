import "./globals.css";

export const metadata = {
  title: "Rehmat Ali | GEO & AEO Specialist",
  description:
    "Strategic Generative Engine Optimization and Answer Engine Optimization services to help businesses improve visibility across AI-powered search experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

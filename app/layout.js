import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export const metadata = {
  title: { default: "Rehmat Ali | GEO & AEO Specialist", template: "%s | Rehmat Ali" },
  description: "Strategic Generative Engine Optimization and Answer Engine Optimization to help businesses improve visibility across AI-powered search experiences."
};
export default function RootLayout({ children }) {
  return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
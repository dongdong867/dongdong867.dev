import Navbar from "@/components/navbar";
import "./globals.css";
import { Montserrat, Lexend, Source_Code_Pro } from "next/font/google";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-Lexend",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-SourceCodePro",
  display: "swap",
});

export const metadata = {
  title: "Dongdong867 - Full Stack Developer | UI/ UX Designer",
  description: "A portfolio designed and developed by Dongdong867.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lexend.variable} ${sourceCodePro.variable}`}
    >
      <body className="flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}

import "./globals.css";
import { Montserrat, Lexend, Source_Code_Pro } from "next/font/google";

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
      <body>{children}</body>
    </html>
  );
}

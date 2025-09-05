import type { Metadata } from "next";

import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata: Metadata = {
  title: "P. Yashaswin Sharma - Portfolio",
  description:
    "Welcome to P. Yashaswin Sharma's portfolio website. Explore my projects, skills, and experience in software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-mono">
        <LayoutWrapper>
          <div className="scan-line"></div>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
              <span className="ml-4 text-green-400">
                puranikyashaswinsharma@portfolio: ~
              </span>
            </div>
            <div className="terminal-content">{children}</div>
          </div>
        </LayoutWrapper>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Royce's Portfolio",
  description: "My Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

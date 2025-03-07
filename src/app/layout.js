import "./globals.css";

export const metadata = {
  title: "Royce's Portfolio",
  description: "My Portofolio",
  metadataBase: process.env.NODE_ENV === "production" ? new URL('https://zealotzz.github.io/Portfolio') : new URL("https://localhost:3000"),
  openGraph: {
    images: '/Logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Cache-control" content="no-cache"/>
        <style>
          {`
            @font-face {
              font-family: "Montserrat";
              src: url("${process.env.NODE_ENV === "production" ? "/Portfolio" : "" }/fonts/Montserrat-VariableFont_wght.ttf") format('truetype');
              font-weight: 100-900;
              font-style: normal;
            }

            @font-face {
              font-family: "Montserrat";
              src: url("${process.env.NODE_ENV === "production" ? "/Portfolio" : "" }/fonts/Montserrat-Italic-VariableFont_wght.ttf") format('truetype');
              font-weight: 100-900;
              font-style: italic;
            }

            @font-face {
              font-family: "SourceCodePro";
              src: url("${process.env.NODE_ENV === "production" ? "/Portfolio" : "" }/fonts/SourceCodePro-VariableFont_wght.ttf") format('truetype');
              font-weight: 100-900;
              font-style: normal;
            }
            
            @font-face {
              font-family: "SourceCodePro";
              src: url("${process.env.NODE_ENV === "production" ? "/Portfolio" : "" }/fonts/SourceCodePro-Italic-VariableFont_wght.ttf") format('truetype');
              font-weight: 100-900;
              font-style: italic;
            }
          `}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Royce's Portfolio",
  description: "My Portofolio",
  openGraph: {
    images: '/Logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

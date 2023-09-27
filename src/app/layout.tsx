import "./globals.css";
import * as fonts from '../agua/assets/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return (
    <html lang="en" className={}>
        <head>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        
        </head>
        <body>
            {children}
            <a
              style={{
                position: "absolute",
                zIndex: 10,
                right: "16px",
                bottom: "16px",
                padding: "8px 16px",
                backgroundColor: "#fff",
                boxShadow: "3px 3px 10px 3px rgba(56,28,100,.1)",
                border: "1px solid #eff1f4",
                borderRadius: "5px",
                fontSize: "12px",
                lineHeight: "24px",
                color: "#000",
                fontWeight: 500,
              }}
              target="_new"
              href="https://agua.app"
            >
              Made in agua.app
            </a>
        </body>
    </html>
    );
}
                
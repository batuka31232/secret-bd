export const metadata = {
    title: "Tosia & Baturay - Birthday Surprise",
    description: "A special birthday surprise website",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="tr">
        <head>
          <style>
            {`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              :root {
                --color-background-tertiary: #f5f5f5;
                --color-background-primary: #ffffff;
                --color-background-secondary: #f9f9f9;
                --color-text-primary: #1a1a1a;
                --color-text-secondary: #666666;
                --color-border-tertiary: rgba(0, 0, 0, 0.1);
                --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              }
              
              @media (prefers-color-scheme: dark) {
                :root {
                  --color-background-tertiary: #1a1a1a;
                  --color-background-primary: #2a2a2a;
                  --color-background-secondary: #333333;
                  --color-text-primary: #ffffff;
                  --color-text-secondary: #aaaaaa;
                  --color-border-tertiary: rgba(255, 255, 255, 0.1);
                }
              }
              
              body {
                font-family: var(--font-sans);
                background-color: var(--color-background-tertiary);
                color: var(--color-text-primary);
              }
            `}
          </style>
        </head>
        <body>{children}</body>
      </html>
    );
  }
// app/layout.js
import './globals.css';  // Global styles
import 'bootstrap/dist/css/bootstrap.css';  // Bootstrap styles
import Script from 'next/script';
import Header from '../components/Header';  // Import the Header component
export const metadata = {
  title: 'The Share Page',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />  {/* Add the Header component here */}
        {children}
        <Script src="Script.js" strategy="lazyOnload" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
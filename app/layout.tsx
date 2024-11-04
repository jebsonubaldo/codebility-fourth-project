import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './components/Authentication';
import { CartProvider } from './components/CartContext';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Urban Shop',
  description: 'Shop the latest in urban fashion and lifestyle at Urban Shop. From trendy clothing to unique accessories and essentials, we bring Pinoy style to life. Elevate your wardrobe and everyday essentials with Urban Shop curated selections.',
};

console.log(
  'Rendering on',
  typeof window === 'undefined' ? 'Server' : 'Client'
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo1.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <AuthProvider>
          <CartProvider>
            <header>
              <Navbar />
            </header>
            {children}
            <footer>
              <Footer />
            </footer>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

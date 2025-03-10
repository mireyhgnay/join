import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지 구현하기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

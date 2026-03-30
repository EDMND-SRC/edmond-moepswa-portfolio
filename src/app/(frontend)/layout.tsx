import './globals.css';
export const metadata = {
  title: 'Edmond Moepswa — Web Designer & Developer',
  description: 'Portfolio of Edmond Moepswa.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}

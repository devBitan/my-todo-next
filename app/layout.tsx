import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className='antialiased'>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Hecho con Amor en riwi
        </footer>
      </body>
    </html>
  );
}

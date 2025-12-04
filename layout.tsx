import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/impressoras">Listar Impressoras</a>
          <a href="/impressoras/new">Cadastrar Nova Impressora</a>
        </nav>
        
        <main className="main-content">
            {children}
        </main>
      </body>
    </html>
  );
}
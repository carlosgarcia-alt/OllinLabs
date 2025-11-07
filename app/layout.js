export const metadata = {
  title: 'Ollin Labs - Soluciones Avanzadas de Software Analítico',
  description: 'Soluciones avanzadas de software analítico para empresas modernas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

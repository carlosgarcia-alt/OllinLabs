export const metadata = {
  title: 'Ollin Labs - Soluciones Avanzadas de Software Analítico',
  description: 'Soluciones avanzadas de software analítico para empresas modernas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              box-sizing: border-box;
            }
            body {
              overflow-x: hidden;
              max-width: 100vw;
            }
            
            /* Dropdown Styles - Global */
            .dropdown-container {
              position: relative;
            }
            
            .dropdown-container::before {
              content: '';
              position: absolute;
              top: 100%;
              left: -20px;
              right: -20px;
              height: 20px;
              background: transparent;
              z-index: 999;
            }
            
            .dropdown-container:hover .dropdown-menu {
              display: block !important;
              animation: slideDown 0.3s ease-out;
            }
            
            .dropdown-menu {
              position: absolute;
              top: calc(100% + 12px);
              left: 0;
              background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
              box-shadow: 0 20px 60px rgba(30, 58, 138, 0.15), 0 0 0 1px rgba(0, 212, 170, 0.1);
              border-radius: 16px;
              padding: 16px 0;
              min-width: 280px;
              display: none;
              z-index: 1000;
              border: 1px solid rgba(0, 212, 170, 0.2);
              backdrop-filter: blur(10px);
            }
            
            .dropdown-menu a:hover {
              background: linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%) !important;
              border-left: 3px solid transparent !important;
              border-image: linear-gradient(45deg, #00D4AA, #0EA5E9) 1 !important;
              color: #00D4AA !important;
              transform: translateX(4px) !important;
            }
            
            .dropdown-menu a:hover div {
              transform: scale(1.2) !important;
              box-shadow: 0 0 12px rgba(0, 212, 170, 0.4) !important;
            }
            
            @keyframes slideDown {
              from { transform: translateY(-10px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            
            @media (max-width: 768px) {
              * {
                max-width: 100% !important;
              }
            }
          `
        }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

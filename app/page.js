'use client';

export default function Home() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, backgroundColor: '#ffffff' }}>
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes dashboardFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(0.5deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes drawLine {
            0% { stroke-dashoffset: 300; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -300; }
          }
          @keyframes barMove {
            0% { transform: scaleY(1) translateY(0); }
            25% { transform: scaleY(1.2) translateY(-5px); }
            50% { transform: scaleY(0.8) translateY(5px); }
            75% { transform: scaleY(1.1) translateY(-2px); }
            100% { transform: scaleY(1) translateY(0); }
          }
          @keyframes barGrow {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
          @keyframes countUp {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .nav-mobile {
              padding: 15px 20px !important;
              flex-direction: column !important;
              gap: 20px !important;
            }
            .nav-links {
              display: flex !important;
              gap: 20px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }
            .hero-mobile {
              flex-direction: column !important;
              padding: 40px 20px !important;
              gap: 40px !important;
              text-align: center !important;
            }
            .hero-title {
              font-size: 36px !important;
            }
            .hero-text {
              max-width: 100% !important;
            }
            .dashboard-mobile {
              max-width: 100% !important;
            }
            .footer-mobile {
              padding: 40px 20px 30px !important;
            }
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
          }
        `
      }} />

      {/* Navigation */}
      <nav className="nav-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#ffffff', animation: 'slideDown 0.8s ease-out' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 2s infinite' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>O</span>
          </div>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Ollin Labs</span>
        </div>
        
        <div className="nav-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <span style={{ color: '#00D4AA', fontWeight: '500' }}>Inicio</span>
          <a href="/nosotros" style={{ color: '#6b7280', textDecoration: 'none' }}>Nosotros</a>
          <a href="/ecosystem" style={{ color: '#6b7280', textDecoration: 'none' }}>Ecosistema</a>
          <a href="/contacto" style={{ color: '#6b7280', textDecoration: 'none' }}>Contacto</a>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-mobile" style={{ display: 'flex', alignItems: 'center', padding: '80px 60px', gap: '80px' }}>
        <div style={{ flex: 1, animation: 'slideInLeft 1s ease-out' }}>
          <div style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', borderRadius: '12px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'float 3s ease-in-out infinite' }}>
            <div style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.3)', borderRadius: '6px' }}></div>
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '64px', fontWeight: 'bold', color: '#1E3A8A', lineHeight: '1.1', margin: '0 0 24px 0', animation: 'fadeInUp 1.2s ease-out 0.3s both' }}>
            Somos desarrolladores<br />
            de software avanzado
          </h1>
          
          <p className="hero-text" style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6', marginBottom: '40px', maxWidth: '500px', animation: 'fadeInUp 1.2s ease-out 0.6s both' }}>
            Aceleramos la evolución digital mediante soluciones personalizadas que transforman ideas en realidades tecnológicas.
          </p>

          <a href="/nosotros" style={{ 
            background: '#00D4AA', 
            color: 'white', 
            border: 'none', 
            padding: '16px 32px', 
            borderRadius: '8px', 
            fontWeight: '500',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-block',
            animation: 'fadeInUp 1.2s ease-out 0.9s both',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            Más información →
          </a>
        </div>

        {/* Dashboard Mockup */}
        <div className="dashboard-mobile" style={{ flex: 1, position: 'relative', animation: 'slideInRight 1s ease-out 0.5s both' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A8A 0%, #0EA5E9 100%)', 
            borderRadius: '16px', 
            padding: '24px',
            boxShadow: '0 25px 50px rgba(30, 58, 138, 0.3)',
            animation: 'dashboardFloat 4s ease-in-out infinite'
          }}>
            {/* Browser Header */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00D4AA' }}></div>
            </div>

            {/* Dashboard Content */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ color: '#1E3A8A', margin: 0 }}>Ventas Regionales</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#e5e7eb', borderRadius: '2px' }}></div>
                  <div style={{ width: '8px', height: '8px', background: '#e5e7eb', borderRadius: '2px' }}></div>
                </div>
              </div>

              {/* Charts Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                {/* Line Chart */}
                <div style={{ height: '120px', background: '#f9fafb', borderRadius: '8px', padding: '16px', position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 80">
                    <polyline points="10,60 40,40 70,50 100,30 130,35 160,20 190,25" 
                              fill="none" stroke="#00D4AA" strokeWidth="2"
                              style={{ strokeDasharray: '300', strokeDashoffset: '300', animation: 'drawLine 3s ease-in-out infinite' }}/>
                  </svg>
                </div>

                {/* Bar Chart */}
                <div style={{ height: '120px', background: '#f9fafb', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'end', gap: '8px' }}>
                  {[40, 60, 35, 80, 45, 70, 55, 90].map((height, i) => (
                    <div key={i} style={{ 
                      width: '16px', 
                      height: `${height}%`, 
                      background: i % 2 === 0 ? '#00D4AA' : '#0EA5E9',
                      borderRadius: '2px 2px 0 0',
                      transformOrigin: 'bottom',
                      animation: `barMove 3s ease-in-out infinite ${i * 0.2}s`
                    }}></div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <div style={{ textAlign: 'center', animation: 'countUp 2s ease-out 1s both' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>30</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Nuevos Usuarios</div>
                </div>
                <div style={{ textAlign: 'center', animation: 'countUp 2s ease-out 1.2s both' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>24</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Ventas</div>
                </div>
                <div style={{ textAlign: 'center', animation: 'countUp 2s ease-out 1.4s both' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>42</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Pedidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-mobile" style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '60px 60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            
            {/* Company Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>O</span>
                </div>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Ollin Labs</span>
              </div>
              <p style={{ color: '#a5b4fc', lineHeight: '1.4', margin: 0, fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                © 2025 Ollin Labs. Todos los derechos reservados.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', margin: '0 0 20px 0' }}>Navegación</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Inicio</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/nosotros" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Nosotros</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/ecosystem" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Ecosistema</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/contacto" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Contacto</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', margin: '0 0 20px 0' }}>Contacto</h4>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ color: '#a5b4fc', margin: '0 0 8px 0' }}>Teléfono:</p>
                <a href="tel:5621854056" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>
                  562-185-4056
                </a>
              </div>
              
              {/* Social Media */}
              <div>
                <p style={{ color: '#a5b4fc', margin: '0 0 12px 0' }}>Síguenos:</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="#" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#00D4AA', 
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>f</a>
                  <a href="#" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#0EA5E9', 
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>ig</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes dashboardFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(0.5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes drawLine {
          0% { stroke-dashoffset: 300; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -300; }
        }
        
        @keyframes barGrow {
          from { height: 0%; }
          to { height: var(--final-height); }
        }
        
        @keyframes countUp {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes buttonHover {
          0%, 100% { box-shadow: 0 4px 15px rgba(0, 212, 170, 0.2); }
          50% { box-shadow: 0 6px 20px rgba(0, 212, 170, 0.4); }
        }
      `}</style>
    </div>
  )
}

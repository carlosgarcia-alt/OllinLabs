'use client';
import Navigation from './components/Navigation';

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
          @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }
          
          /* Ollin Labs Signature Dropdown Styles */
          .dropdown-container:hover .dropdown-menu {
            display: block !important;
            animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
          
          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .nav-mobile {
              padding: 10px 15px !important;
              flex-direction: column !important;
              gap: 15px !important;
            }
            .nav-links {
              display: flex !important;
              gap: 15px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
              font-size: 14px !important;
            }
            .hero-mobile {
              flex-direction: column !important;
              padding: 20px 15px !important;
              gap: 25px !important;
              text-align: center !important;
            }
            .hero-title {
              font-size: 28px !important;
              line-height: 1.2 !important;
              margin-bottom: 15px !important;
            }
            .hero-text {
              max-width: 100% !important;
              font-size: 16px !important;
              margin-bottom: 25px !important;
            }
            .dashboard-mobile {
              max-width: 100% !important;
              transform: scale(0.85) !important;
            }
            .footer-mobile {
              padding: 30px 15px 20px !important;
            }
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .ecosystem-card {
              padding: 20px !important;
            }
            .ecosystem-card h3 {
              font-size: 24px !important;
            }
            .ecosystem-animation {
              transform: scale(0.9) !important;
            }
          }
        `
      }} />

      {/* Navigation */}
      <Navigation currentPage="inicio" />

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

      {/* Ecosystem Section */}
      <section style={{ padding: '80px 60px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 24px 0', animation: 'fadeInUp 1s ease-out' }}>
              Nuestro Ecosistema
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto 0 0', animation: 'fadeInUp 1s ease-out 0.2s both' }}>
              Tres soluciones integradas que transforman sectores completos
            </p>
          </div>

          {/* Contlity Card */}
          <div style={{ marginBottom: '60px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            <div className="ecosystem-card" style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              <a href="#" style={{ 
                background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)',
                color: 'white', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: '500',
                fontSize: '12px',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'absolute',
                top: '40px',
                right: '40px'
              }}>
                Preview →
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  C
                </div>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: 0 }}>Contlity</h3>
                  <p style={{ fontSize: '16px', color: '#00D4AA', fontWeight: '500', margin: '4px 0 0 0' }}>
                    Automatización Financiera y Fiscal con IA
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '18px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '20px', fontWeight: '600' }}>
                Contlity es una plataforma SaaS que redefine la gestión financiera y fiscal mediante inteligencia artificial y automatización avanzada.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Su tecnología crea un entorno inteligente donde usuarios, contadores y empresas colaboran de forma fluida, centralizando la gestión de facturas, reportes y cumplimiento fiscal con los más altos estándares de seguridad y eficiencia.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Construida sobre infraestructura en la nube (AWS) y potenciada por machine learning, Contlity identifica patrones contables, proyecta flujos de efectivo y detecta inconsistencias en tiempo real. Integra AI Document Capture Software para digitalizar y clasificar automáticamente documentos fiscales, junto con AI Chat Software que funciona como asistente financiero conversacional, capaz de responder, generar reportes y ejecutar acciones mediante lenguaje natural.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Gracias a su arquitectura modular, se adapta a cada usuario e impulsa una contabilidad más digital, accesible y proactiva, transformando la gestión financiera tradicional en una experiencia inteligente que aprende, se anticipa y evoluciona con cada negocio.
              </p>
              <p style={{ fontSize: '18px', color: '#1E3A8A', lineHeight: '1.8', fontWeight: '600', marginBottom: '20px' }}>
                Representa el pilar tecnológico del ecosistema Ollin Labs, transformando la contabilidad tradicional en una experiencia digital, accesible y proactiva.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                {[
                  "Reducción del 80% en tiempos administrativos",
                  "Infraestructura en la nube AWS para seguridad y escalabilidad", 
                  "Procesamiento inteligente de datos en tiempo real",
                  "Integración con red de profesionales verificados"
                ].map((feature, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      background: '#00D4AA', 
                      borderRadius: '50%' 
                    }}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Contlity Animation */}
            <div className="ecosystem-animation" style={{ marginTop: '30px', animation: 'slideInUp 1s ease-out 0.6s both' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)', 
                borderRadius: '16px', 
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0, 212, 170, 0.2)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h4 style={{ color: '#1E3A8A', margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Panel Financiero</h4>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                      <span style={{ fontSize: '10px', color: '#00D4AA', fontWeight: '500' }}>Sincronizado</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #00D4AA, #0EA5E9)', 
                      padding: '16px', 
                      borderRadius: '8px',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '10px', opacity: 0.8, marginBottom: '4px' }}>Ingresos</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$2.4M</div>
                      <div style={{ fontSize: '8px', opacity: 0.7 }}>+12% vs mes anterior</div>
                    </div>
                    
                    <div style={{ 
                      background: 'linear-gradient(135deg, #1E3A8A, #00D4AA)', 
                      padding: '16px', 
                      borderRadius: '8px',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '10px', opacity: 0.8, marginBottom: '4px' }}>Gastos</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$1.8M</div>
                      <div style={{ fontSize: '8px', opacity: 0.7 }}>-5% optimización</div>
                    </div>
                  </div>

                  <div style={{ 
                    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                    padding: '12px', 
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '8px',
                        fontWeight: 'bold'
                      }}>
                        AI
                      </div>
                      <span style={{ fontSize: '10px', color: '#1E3A8A', fontWeight: '600' }}>Insight Inteligente</span>
                    </div>
                    <p style={{ fontSize: '9px', color: '#4b5563', margin: 0, lineHeight: '1.3' }}>
                      Proyección: Flujo positivo de $600K para Q4. Recomiendo optimizar gastos operativos en 8%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A la Mano Card */}
          <div style={{ marginBottom: '60px', animation: 'fadeInUp 1s ease-out 0.6s both' }}>
            <div className="ecosystem-card" style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              <a href="https://alamano-customer-website.vercel.app/" target="_blank" style={{ 
                background: 'linear-gradient(45deg, #0EA5E9, #1E3A8A)',
                color: 'white', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: '500',
                fontSize: '12px',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'absolute',
                top: '40px',
                right: '40px'
              }}>
                Preview →
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #1E3A8A 100%)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  AM
                </div>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: 0 }}>A la Mano</h3>
                  <p style={{ fontSize: '16px', color: '#0EA5E9', fontWeight: '500', margin: '4px 0 0 0' }}>
                    Marketplace de Servicios para el Hogar
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '18px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '20px', fontWeight: '600' }}>
                A la Mano es una plataforma que impulsa la digitalización de los servicios locales, conectando personas con profesionales verificados de manera rápida, transparente y segura.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Su modelo combina una aplicación de usuario y un panel profesional que funcionan en sincronía, facilitando la contratación, gestión y seguimiento de servicios como mantenimiento, limpieza, estética, carpintería y más.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Desarrollada con tecnologías web progresivas y bases de datos en la nube, A la Mano utiliza algoritmos de emparejamiento inteligente, geolocalización avanzada y mensajería interna cifrada para optimizar la experiencia tanto del usuario como del prestador. Además, ofrece herramientas de gestión como agendas dinámicas, estadísticas de rendimiento y sistemas de reputación basados en reseñas verificadas.
              </p>
              <p style={{ fontSize: '18px', color: '#1E3A8A', lineHeight: '1.8', fontWeight: '600', marginBottom: '20px' }}>
                A la Mano integra un sistema de suscripciones escalables para prestadores, junto con un modelo de comisión por transacción, creando un ecosistema autosostenible que digitaliza oficios y fomenta la economía local. Su enfoque tecnológico y humano la convierte en una de las soluciones más accesibles e inclusivas dentro del portafolio de Ollin Labs.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                {[
                  "Red de proveedores de servicios verificados",
                  "Contratación segura y rápida",
                  "Digitalización de la economía local",
                  "Procesos de trazabilidad automatizados"
                ].map((feature, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      background: '#0EA5E9', 
                      borderRadius: '50%' 
                    }}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* A la Mano Animation */}
            <div className="ecosystem-animation" style={{ marginTop: '30px', animation: 'slideInUp 1s ease-out 0.8s both' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #0EA5E9 0%, #1E3A8A 100%)', 
                borderRadius: '16px', 
                padding: '24px',
                boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h4 style={{ color: '#1E3A8A', margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Servicios Locales</h4>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', background: '#0EA5E9', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                      <span style={{ fontSize: '10px', color: '#0EA5E9', fontWeight: '500' }}>En vivo</span>
                    </div>
                  </div>

                  <div style={{ 
                    background: '#f8fafc', 
                    borderRadius: '8px', 
                    padding: '16px', 
                    marginBottom: '16px',
                    position: 'relative',
                    height: '80px'
                  }}>
                    {[
                      { service: 'Plomería', x: '20%', y: '30%', color: '#0EA5E9' },
                      { service: 'Limpieza', x: '60%', y: '20%', color: '#00D4AA' },
                      { service: 'Carpintería', x: '40%', y: '60%', color: '#1E3A8A' }
                    ].map((pin, i) => (
                      <div key={i} style={{ 
                        position: 'absolute',
                        left: pin.x,
                        top: pin.y
                      }}>
                        <div style={{ 
                          width: '16px', 
                          height: '16px', 
                          background: pin.color,
                          borderRadius: '50% 50% 50% 0',
                          transform: 'rotate(-45deg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 2px 8px ${pin.color}40`
                        }}>
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            background: 'white',
                            borderRadius: '50%',
                            transform: 'rotate(45deg)'
                          }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ 
                    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                    padding: '12px', 
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1E3A8A' }}>247</div>
                        <div style={{ fontSize: '8px', color: '#6b7280' }}>Profesionales</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1E3A8A' }}>1.2K</div>
                        <div style={{ fontSize: '8px', color: '#6b7280' }}>Servicios</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1E3A8A' }}>98%</div>
                        <div style={{ fontSize: '8px', color: '#6b7280' }}>Satisfacción</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mevi Pro Card */}
          <div style={{ marginBottom: '60px', animation: 'fadeInUp 1s ease-out 0.8s both' }}>
            <div className="ecosystem-card" style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              <a href="https://mevi-sv1a.vercel.app/" target="_blank" style={{ 
                background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)',
                color: 'white', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: '500',
                fontSize: '12px',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'absolute',
                top: '40px',
                right: '40px'
              }}>
                Preview →
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  MP
                </div>
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: 0 }}>Mevi Pro</h3>
                  <p style={{ fontSize: '16px', color: '#1E3A8A', fontWeight: '500', margin: '4px 0 0 0' }}>
                    Gestión Inteligente para Salones y Spas
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '18px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '20px', fontWeight: '600' }}>
                Mevi Pro es una plataforma diseñada para profesionalizar la administración de salones de belleza, spas y barberías, combinando gestión operativa, atención al cliente y análisis inteligente en un solo entorno digital.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Desarrollada con arquitecturas en la nube, bases de datos escalables y un asistente virtual impulsado por IA llamado Mavi, Mevi Pro automatiza procesos cotidianos como reservas, control de ingresos, seguimiento de clientes y generación de reportes.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Su sistema integra módulos de analítica avanzada que permiten visualizar métricas de rendimiento, comportamiento de clientes, productividad del personal y tendencias de consumo. Gracias a su motor de recomendaciones, el negocio puede anticipar demanda, personalizar ofertas y mejorar la retención de clientes.
              </p>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '16px' }}>
                Además, Mevi Pro cuenta con aplicaciones web y móviles optimizadas, compatibles con múltiples dispositivos, asegurando una gestión fluida y en tiempo real.
              </p>
              <p style={{ fontSize: '18px', color: '#1E3A8A', lineHeight: '1.8', fontWeight: '600', marginBottom: '20px' }}>
                Más que una herramienta de administración, Mevi Pro es un asistente digital integral que impulsa la modernización de los servicios de belleza, ayudando a los negocios a escalar de forma eficiente y rentable.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                {[
                  "Gestión integrada de citas y clientes",
                  "Análisis e informes potenciados por IA",
                  "Campañas de marketing automatizadas",
                  "Control financiero centralizado"
                ].map((feature, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      background: '#1E3A8A', 
                      borderRadius: '50%' 
                    }}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Mevi Pro Animation */}
            <div className="ecosystem-animation" style={{ marginTop: '30px', animation: 'slideInUp 1s ease-out 1s both' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)', 
                borderRadius: '16px', 
                padding: '24px',
                boxShadow: '0 20px 40px rgba(30, 58, 138, 0.2)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h4 style={{ color: '#1E3A8A', margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Salón Bella Vista</h4>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                      <span style={{ fontSize: '10px', color: '#00D4AA', fontWeight: '500' }}>Mavi Online</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px', fontWeight: '500' }}>Agenda del Día</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {[
                        { time: '10:00', service: 'Corte + Peinado', client: 'María G.', color: '#00D4AA' },
                        { time: '11:30', service: 'Manicure', client: 'Carmen L.', color: '#0EA5E9' },
                        { time: '13:00', service: 'Tinte + Corte', client: 'Sofia R.', color: '#1E3A8A' }
                      ].map((appointment, i) => (
                        <div key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          padding: '8px 12px',
                          background: '#f8fafc',
                          borderRadius: '8px'
                        }}>
                          <div style={{ 
                            width: '24px', 
                            height: '24px', 
                            background: appointment.color,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '8px',
                            fontWeight: 'bold',
                            marginRight: '8px'
                          }}>
                            {appointment.time.split(':')[0]}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#1E3A8A' }}>{appointment.service}</div>
                            <div style={{ fontSize: '8px', color: '#6b7280' }}>{appointment.client}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ 
                    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                    padding: '12px', 
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '8px',
                        fontWeight: 'bold'
                      }}>
                        M
                      </div>
                      <span style={{ fontSize: '10px', color: '#1E3A8A', fontWeight: '600' }}>Mavi Assistant</span>
                    </div>
                    <p style={{ fontSize: '9px', color: '#4b5563', margin: 0, lineHeight: '1.3' }}>
                      💡 Sugerencia: María G. suele reservar tratamientos faciales. ¿Ofrecemos promoción 2x1?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-mobile" style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '60px 60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            
            {/* Company Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <img src="/ollin-logo-new.svg" alt="Ollin Labs" style={{ height: '48px', width: 'auto' }} />
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
                  <a href="https://www.facebook.com/profile.php?id=61583413809176&locale=es_LA" target="_blank" rel="noopener noreferrer" style={{ 
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

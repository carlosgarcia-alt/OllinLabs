'use client';
import Navigation from '../../components/Navigation';

export default function PlataformasSaaS() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, backgroundColor: '#ffffff' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes fadeInUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes slideInLeft { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes slideInRight { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          .dropdown-container:hover .dropdown-menu { display: block !important; animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .dropdown-menu a:hover { background: linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%) !important; color: #00D4AA !important; transform: translateX(4px) !important; }
          @media (max-width: 768px) { .nav-mobile { padding: 10px 15px !important; flex-direction: column !important; gap: 15px !important; } .nav-links { display: flex !important; gap: 15px !important; flex-wrap: wrap !important; justify-content: center !important; font-size: 14px !important; } .hero-section-mobile { padding: 40px 15px !important; flex-direction: column !important; text-align: center !important; } .hero-title { font-size: 28px !important; line-height: 1.2 !important; } .footer-mobile { padding: 30px 15px 20px !important; } .footer-grid { grid-template-columns: 1fr !important; gap: 20px !important; } }
        `
      }} />

      <Navigation currentPage="soluciones/plataformas-saas" />

      <section className="hero-section-mobile" style={{ padding: '80px 60px', background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 50%, #0EA5E9 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title" style={{ fontSize: '56px', fontWeight: 'bold', margin: '0 0 32px 0', background: 'linear-gradient(45deg, #ffffff, #f0f9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'fadeInUp 1s ease-out 0.2s both' }}>Plataformas SaaS</h1>
          <p style={{ fontSize: '24px', lineHeight: '1.6', margin: '0 auto 40px', opacity: 0.95, maxWidth: '800px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            Desarrolla soluciones escalables en la nube que transformen tu modelo de negocio y generen ingresos recurrentes.
          </p>
        </div>
        
        {/* Animated SaaS Dashboard */}
        <div style={{ position: 'absolute', top: '15%', right: '8%', width: '320px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', backdropFilter: 'blur(10px)', animation: 'float 4s ease-in-out infinite' }}>
          <div style={{ fontSize: '12px', marginBottom: '16px', opacity: 0.9 }}>SaaS Platform</div>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '10px' }}>Usuarios Activos</span>
              <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.3)', height: '40px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
              Escalando...
            </div>
          </div>
          <div style={{ fontSize: '10px', opacity: 0.8 }}>Uptime: 99.9%</div>
        </div>
        
        {/* Floating Elements */}
        <div style={{ position: 'absolute', top: '25%', left: '12%', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', animation: 'float 3s ease-in-out infinite 0.5s' }}></div>
        <div style={{ position: 'absolute', bottom: '25%', right: '20%', width: '60px', height: '60px', background: 'rgba(0,212,170,0.3)', borderRadius: '50%', animation: 'float 4s ease-in-out infinite 1.5s' }}></div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.2s both' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '32px', textAlign: 'center' }}>¿Qué son las Plataformas SaaS?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
                Software as a Service (SaaS) es un modelo de distribución de software donde las aplicaciones se alojan en la nube y se acceden vía internet. Este enfoque permite:
              </p>
              <ul style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '12px' }}>Acceso desde cualquier dispositivo y ubicación</li>
                <li style={{ marginBottom: '12px' }}>Actualizaciones automáticas y mantenimiento incluido</li>
                <li style={{ marginBottom: '12px' }}>Escalabilidad instantánea según demanda</li>
                <li style={{ marginBottom: '12px' }}>Modelo de ingresos recurrentes y predecibles</li>
              </ul>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)', borderRadius: '20px', padding: '40px', color: 'white', textAlign: 'center', animation: 'slideInRight 1s ease-out 0.4s both' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Escalabilidad Global</h3>
              <p style={{ fontSize: '16px', opacity: 0.9 }}>Alcanza mercados globales con infraestructura robusta y confiable.</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '48px', textAlign: 'center' }}>SaaS para Empresas</h2>
          <div style={{ display: 'grid', gap: '40px' }}>
            {[
              { title: "Sistemas de Gestión Empresarial", description: "ERP y CRM personalizados que centralizan operaciones, automatizan procesos y proporcionan visibilidad completa del negocio en tiempo real.", icon: "system", color: "#00D4AA" },
              { title: "Plataformas de Colaboración", description: "Herramientas que conectan equipos distribuidos, facilitan la comunicación y mejoran la productividad con funcionalidades integradas.", icon: "collaboration", color: "#0EA5E9" },
              { title: "Soluciones de E-learning", description: "Plataformas educativas que escalan el conocimiento, certifican competencias y miden el progreso de aprendizaje organizacional.", icon: "learning", color: "#1E3A8A" }
            ].map((item, index) => (
              <div key={index} style={{ display: 'grid', gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: '40px', alignItems: 'center', animation: `slideIn${index % 2 === 0 ? 'Left' : 'Right'} 1s ease-out ${0.6 + index * 0.2}s both` }}>
                {index % 2 === 0 ? (
                  <>
                    <div style={{ background: `linear-gradient(135deg, ${item.color}, #ffffff)`, borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E3A8A' }}>{item.title}</h3>
                    </div>
                    <div><p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8' }}>{item.description}</p></div>
                  </>
                ) : (
                  <>
                    <div><p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8' }}>{item.description}</p></div>
                    <div style={{ background: `linear-gradient(135deg, ${item.color}, #ffffff)`, borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E3A8A' }}>{item.title}</h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.8s both' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '48px', textAlign: 'center' }}>Ventajas del Modelo SaaS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { title: "Ingresos Recurrentes", description: "Modelo de suscripción que genera flujo de caja predecible", icon: "revenue" },
              { title: "Escalabilidad Automática", description: "Infraestructura que crece con tu base de usuarios", icon: "scale" },
              { title: "Actualizaciones Continuas", description: "Mejoras constantes sin interrupciones para el usuario", icon: "update" },
              { title: "Alcance Global", description: "Acceso mundial sin barreras geográficas", icon: "global" }
            ].map((benefit, index) => (
              <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', textAlign: 'center', animation: `fadeInUp 1s ease-out ${1 + index * 0.1}s both` }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '50%' }}></div>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '16px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 50%, #0EA5E9 100%)', borderRadius: '24px', padding: '60px', textAlign: 'center', color: 'white', animation: 'fadeInUp 1s ease-out 1.2s both' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}>Lanza tu Plataforma SaaS</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>Transforma tu idea en una solución escalable que genere ingresos recurrentes.</p>
          <a href="/contacto" style={{ background: 'white', color: '#1E3A8A', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', display: 'inline-block', transition: 'transform 0.2s ease', boxShadow: '0 4px 20px rgba(255,255,255,0.3)' }}>Desarrollar SaaS →</a>
        </div>
      </section>

      <footer className="footer-mobile" style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '60px 60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Ollin Labs</span>
              </div>
              <p style={{ color: '#a5b4fc', lineHeight: '1.4', margin: 0, fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.5px' }}>© 2025 Ollin Labs. Todos los derechos reservados.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', margin: '0 0 20px 0' }}>Navegación</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Inicio</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/nosotros" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Nosotros</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/ecosystem" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Ecosistema</a></li>
                <li style={{ marginBottom: '12px' }}><a href="/contacto" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', margin: '0 0 20px 0' }}>Contacto</h4>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ color: '#a5b4fc', margin: '0 0 8px 0' }}>Teléfono:</p>
                <a href="tel:5621854056" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>562-185-4056</a>
              </div>
              <div>
                <p style={{ color: '#a5b4fc', margin: '0 0 12px 0' }}>Síguenos:</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '40px', height: '40px', background: '#00D4AA', borderRadius: '8px', textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>f</a>
                  <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '40px', height: '40px', background: '#0EA5E9', borderRadius: '8px', textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>ig</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

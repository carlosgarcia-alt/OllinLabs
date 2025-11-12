'use client';
import Navigation from '../../components/Navigation';

export default function DataAnalytics() {
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

      <Navigation currentPage="soluciones/data-analytics" />

      <section className="hero-section-mobile" style={{ padding: '80px 60px', background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 50%, #1E3A8A 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title" style={{ fontSize: '56px', fontWeight: 'bold', margin: '0 0 32px 0', background: 'linear-gradient(45deg, #ffffff, #f0f9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'fadeInUp 1s ease-out 0.2s both' }}>Data & Analytics</h1>
          <p style={{ fontSize: '24px', lineHeight: '1.6', margin: '0 auto 40px', opacity: 0.95, maxWidth: '800px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            Transforma datos en decisiones estratégicas con análisis avanzado e inteligencia de negocio.
          </p>
        </div>
        
        {/* Animated Analytics Dashboard */}
        <div style={{ position: 'absolute', top: '15%', right: '8%', width: '320px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', backdropFilter: 'blur(10px)', animation: 'float 4s ease-in-out infinite' }}>
          <div style={{ fontSize: '12px', marginBottom: '16px', opacity: 0.9 }}>Dashboard Analytics</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>2.4M</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Revenue</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>+15%</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Growth</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
              <span style={{ fontSize: '10px' }}>Analizando datos...</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div style={{ position: 'absolute', top: '25%', left: '12%', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', animation: 'float 3s ease-in-out infinite 0.5s' }}></div>
        <div style={{ position: 'absolute', bottom: '25%', right: '20%', width: '60px', height: '60px', background: 'rgba(0,212,170,0.3)', borderRadius: '50%', animation: 'float 4s ease-in-out infinite 1.5s' }}></div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.2s both' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '32px', textAlign: 'center' }}>¿Qué es Data Analytics?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
                Data Analytics es el proceso de examinar conjuntos de datos para extraer insights valiosos que impulsen la toma de decisiones empresariales. Esta disciplina permite:
              </p>
              <ul style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '12px' }}>Identificar patrones y tendencias ocultas en los datos</li>
                <li style={{ marginBottom: '12px' }}>Predecir comportamientos futuros del mercado</li>
                <li style={{ marginBottom: '12px' }}>Optimizar procesos y recursos empresariales</li>
                <li style={{ marginBottom: '12px' }}>Medir y mejorar el rendimiento organizacional</li>
              </ul>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)', borderRadius: '20px', padding: '40px', color: 'white', textAlign: 'center', animation: 'slideInRight 1s ease-out 0.4s both' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Insights Accionables</h3>
              <p style={{ fontSize: '16px', opacity: 0.9 }}>Convierte información compleja en estrategias claras y medibles.</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '48px', textAlign: 'center' }}>Analytics para Empresas</h2>
          <div style={{ display: 'grid', gap: '40px' }}>
            {[
              { title: "Inteligencia de Ventas", description: "Análisis predictivo de ventas que identifica oportunidades, optimiza precios y mejora la conversión mediante el estudio de patrones de compra y comportamiento del cliente.", icon: "chart", color: "#00D4AA" },
              { title: "Optimización Operacional", description: "Dashboards en tiempo real que monitorean KPIs críticos, identifican cuellos de botella y sugieren mejoras para maximizar la eficiencia operativa.", icon: "gear", color: "#0EA5E9" },
              { title: "Análisis de Riesgo Financiero", description: "Modelos predictivos que evalúan riesgos crediticios, detectan fraudes y optimizan carteras de inversión mediante análisis avanzado de datos financieros.", icon: "shield", color: "#1E3A8A" }
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
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', marginBottom: '48px', textAlign: 'center' }}>Beneficios Clave</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { title: "Decisiones Basadas en Datos", description: "Elimina la intuición y basa las decisiones en evidencia concreta", icon: "target" },
              { title: "ROI Medible", description: "Cuantifica el impacto de cada iniciativa empresarial", icon: "growth" },
              { title: "Ventaja Competitiva", description: "Identifica oportunidades antes que la competencia", icon: "trophy" },
              { title: "Eficiencia Operativa", description: "Optimiza recursos y reduce costos operativos", icon: "efficiency" }
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

        <div style={{ background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 50%, #1E3A8A 100%)', borderRadius: '24px', padding: '60px', textAlign: 'center', color: 'white', animation: 'fadeInUp 1s ease-out 1.2s both' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}>Potencia tu Negocio con Datos</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>Descubre el valor oculto en tus datos y toma decisiones que impulsen el crecimiento.</p>
          <a href="/contacto" style={{ background: 'white', color: '#1E3A8A', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', display: 'inline-block', transition: 'transform 0.2s ease', boxShadow: '0 4px 20px rgba(255,255,255,0.3)' }}>Comenzar Análisis →</a>
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

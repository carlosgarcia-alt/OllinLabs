'use client';

export default function Contacto() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, backgroundColor: '#ffffff' }}>
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes countUp {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 4px 20px rgba(0, 212, 170, 0.2); }
            50% { box-shadow: 0 8px 30px rgba(0, 212, 170, 0.4); }
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
            .hero-section-mobile {
              flex-direction: column !important;
              padding: 40px 20px !important;
              gap: 40px !important;
              text-align: center !important;
            }
            .hero-title {
              font-size: 36px !important;
            }
            .contact-form {
              padding: 40px 20px !important;
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
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Inicio</a>
          <a href="/nosotros" style={{ color: '#6b7280', textDecoration: 'none' }}>Nosotros</a>
          <a href="/ecosystem" style={{ color: '#6b7280', textDecoration: 'none' }}>Ecosistema</a>
          <span style={{ color: '#00D4AA', fontWeight: '500' }}>Contacto</span>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section-mobile" style={{ 
        padding: '80px 60px', 
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Communication Dashboard */}
        <div style={{ flex: 1, position: 'relative', animation: 'slideInRight 1s ease-out 0.5s both' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A8A 0%, #0EA5E9 100%)', 
            borderRadius: '16px', 
            padding: '24px',
            boxShadow: '0 25px 50px rgba(30, 58, 138, 0.3)',
            animation: 'float 4s ease-in-out infinite'
          }}>
            {/* Browser Header */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00D4AA' }}></div>
            </div>

            {/* Communication Interface */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ color: '#1E3A8A', margin: 0, fontSize: '16px' }}>Centro de Comunicación</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                  <span style={{ fontSize: '12px', color: '#00D4AA' }}>En línea</span>
                </div>
              </div>

              {/* Message Bubbles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <div style={{ 
                  alignSelf: 'flex-start',
                  background: '#f3f4f6', 
                  padding: '12px 16px', 
                  borderRadius: '16px 16px 16px 4px',
                  maxWidth: '70%',
                  animation: 'fadeInUp 2s ease-out 1s both'
                }}>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Cliente</div>
                  <div style={{ fontSize: '14px', color: '#1E3A8A' }}>Necesito una solución digital...</div>
                </div>
                
                <div style={{ 
                  alignSelf: 'flex-end',
                  background: 'linear-gradient(135deg, #00D4AA, #0EA5E9)', 
                  padding: '12px 16px', 
                  borderRadius: '16px 16px 4px 16px',
                  maxWidth: '70%',
                  color: 'white',
                  animation: 'fadeInUp 2s ease-out 1.5s both'
                }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>Ollin Labs</div>
                  <div style={{ fontSize: '14px' }}>¡Perfecto! Analicemos tu proyecto</div>
                </div>

                <div style={{ 
                  alignSelf: 'flex-start',
                  background: '#f3f4f6', 
                  padding: '12px 16px', 
                  borderRadius: '16px 16px 16px 4px',
                  maxWidth: '70%',
                  animation: 'fadeInUp 2s ease-out 2s both'
                }}>
                  <div style={{ fontSize: '14px', color: '#1E3A8A' }}>¿Cuándo podemos empezar?</div>
                </div>
              </div>

              {/* Contact Methods */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '12px',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  animation: 'countUp 2s ease-out 2.5s both'
                }}>
                  <div style={{ width: '24px', height: '24px', background: '#00D4AA', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>T</div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#6b7280' }}>Teléfono</div>
                    <div style={{ fontSize: '12px', color: '#1E3A8A', fontWeight: 'bold' }}>562-185-4056</div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '12px',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  animation: 'countUp 2s ease-out 3s both'
                }}>
                  <div style={{ width: '24px', height: '24px', background: '#0EA5E9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>E</div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#6b7280' }}>Email</div>
                    <div style={{ fontSize: '12px', color: '#1E3A8A', fontWeight: 'bold' }}>Disponible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1E3A8A', 
            lineHeight: '1.1', 
            margin: '0 0 24px 0', 
            animation: 'fadeInUp 1.2s ease-out 0.3s both' 
          }}>
            Conectemos y<br />
            construyamos juntos
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280', 
            lineHeight: '1.6', 
            marginBottom: '40px', 
            maxWidth: '500px', 
            animation: 'fadeInUp 1.2s ease-out 0.6s both' 
          }}>
            Estamos listos para transformar tu visión en realidad digital. Contáctanos y descubre cómo podemos impulsar tu proyecto.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '0 60px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Contact Form */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', marginBottom: '60px', animation: 'slideInLeft 1s ease-out 0.9s both' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 24px 0' }}>
              Envíanos un mensaje
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '32px' }}>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1E3A8A', marginBottom: '8px' }}>
                    Nombre *
                  </label>
                  <input 
                    type="text" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '2px solid #e5e7eb', 
                      borderRadius: '8px', 
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#00D4AA'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1E3A8A', marginBottom: '8px' }}>
                    Apellido *
                  </label>
                  <input 
                    type="text" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '2px solid #e5e7eb', 
                      borderRadius: '8px', 
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#00D4AA'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1E3A8A', marginBottom: '8px' }}>
                  Email *
                </label>
                <input 
                  type="email" 
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '8px', 
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00D4AA'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1E3A8A', marginBottom: '8px' }}>
                  Teléfono
                </label>
                <input 
                  type="tel"
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '8px', 
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00D4AA'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1E3A8A', marginBottom: '8px' }}>
                  Mensaje *
                </label>
                <textarea 
                  required
                  rows="5"
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '8px', 
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00D4AA'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button 
                type="submit"
                style={{ 
                  background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)',
                  color: 'white', 
                  border: 'none', 
                  padding: '16px 32px', 
                  borderRadius: '8px', 
                  fontWeight: '500',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 170, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Enviar mensaje →
              </button>
            </form>
          </div>

          {/* Contact Information - Minimalist */}
          <div style={{ textAlign: 'center', animation: 'slideInRight 1s ease-out 1.2s both' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 32px 0' }}>
              Información de contacto
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
              
              {/* Phone */}
              <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-out 1.5s both' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>📞</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E3A8A', margin: '0 0 4px 0' }}>
                  Teléfono
                </h3>
                <a href="tel:5621854056" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '14px' }}>
                  562-185-4056
                </a>
              </div>

              {/* Email */}
              <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-out 1.7s both' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(45deg, #0EA5E9, #1E3A8A)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  animation: 'float 3s ease-in-out infinite 0.5s'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>✉️</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E3A8A', margin: '0 0 4px 0' }}>
                  Email
                </h3>
                <a href="mailto:contacto@ollinlabs.com" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '14px' }}>
                  contacto@ollinlabs.com
                </a>
              </div>

              {/* Social Media */}
              <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-out 1.9s both' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  animation: 'float 3s ease-in-out infinite 1s'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🌐</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E3A8A', margin: '0 0 8px 0' }}>
                  Redes sociales
                </h3>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <a href="#" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#00D4AA', 
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    transition: 'transform 0.3s ease',
                    animation: 'glow 2s ease-in-out infinite'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >f</a>
                  <a href="#" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#0EA5E9', 
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    transition: 'transform 0.3s ease',
                    animation: 'glow 2s ease-in-out infinite 0.5s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >ig</a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div style={{ 
              marginTop: '40px', 
              padding: '20px', 
              background: '#f8fafc', 
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              maxWidth: '400px',
              margin: '40px auto 0',
              animation: 'fadeInUp 1s ease-out 2.1s both'
            }}>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>
                <strong style={{ color: '#1E3A8A' }}>Tiempo de respuesta:</strong> Nos comprometemos a responder en máximo 24 horas.
              </p>
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
    </div>
  );
}

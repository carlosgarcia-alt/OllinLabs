'use client';

export default function Nosotros() {
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
          @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes barGrow {
            from { width: 0%; }
            to { width: var(--final-width); }
          }
          @keyframes countUp {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `
      }} />

      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', animation: 'slideDown 0.8s ease-out' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 2s infinite' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>O</span>
          </div>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Ollin Labs</span>
        </div>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Inicio</a>
          <span style={{ color: '#00D4AA', fontWeight: '500' }}>Nosotros</span>
          <a href="/ecosystem" style={{ color: '#6b7280', textDecoration: 'none' }}>Ecosistema</a>
          <a href="/contacto" style={{ color: '#6b7280', textDecoration: 'none' }}>Contacto</a>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: '80px 60px 60px', 
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Team Dashboard Animation */}
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

            {/* Team Dashboard */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ color: '#1E3A8A', margin: 0, fontSize: '16px' }}>Equipo de Desarrollo</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                  <div style={{ width: '8px', height: '8px', background: '#0EA5E9', borderRadius: '50%', animation: 'pulse 2s infinite 0.5s' }}></div>
                </div>
              </div>

              {/* Team Members */}
              <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
                {[
                  { name: 'IA & ML', progress: 85, color: '#00D4AA' },
                  { name: 'Frontend', progress: 92, color: '#0EA5E9' },
                  { name: 'Backend', progress: 88, color: '#1E3A8A' },
                  { name: 'DevOps', progress: 78, color: '#00D4AA' }
                ].map((skill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: skill.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
                      {skill.name.slice(0,2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>{skill.name}</div>
                      <div style={{ width: '100%', height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ 
                          width: `${skill.progress}%`, 
                          height: '100%', 
                          background: skill.color, 
                          borderRadius: '3px',
                          animation: `barGrow 2s ease-out ${i * 0.3}s both`
                        }}></div>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#1E3A8A', fontWeight: 'bold' }}>{skill.progress}%</span>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                {[1,2,3,4,5].map((step, i) => (
                  <div key={i} style={{ textAlign: 'center', animation: `countUp 2s ease-out ${i * 0.2 + 1}s both` }}>
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      background: i < 3 ? '#00D4AA' : '#e5e7eb', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      margin: '0 auto 8px'
                    }}>
                      {step}
                    </div>
                    <div style={{ fontSize: '10px', color: '#6b7280' }}>Paso {step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            lineHeight: '1.2', 
            margin: '0 0 24px 0', 
            animation: 'fadeInUp 1s ease-out',
            color: '#1E3A8A'
          }}>
            Conoce Ollin Labs
          </h1>
          <p style={{ 
            fontSize: '20px', 
            lineHeight: '1.6', 
            animation: 'fadeInUp 1s ease-out 0.2s both',
            color: '#6b7280',
            marginBottom: '40px'
          }}>
            Transformamos sectores completos mediante tecnología avanzada y soluciones digitales innovadoras
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ padding: '80px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Sobre nosotros Section */}
        <section style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1E3A8A', 
            margin: '0 0 40px 0', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1E3A8A 0%, #0EA5E9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Sobre nosotros
          </h2>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
            padding: '50px', 
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '22px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '32px', fontWeight: '600' }}>
              Somos un equipo especializado en crear, desarrollar y escalar soluciones digitales que transforman sectores completos mediante inteligencia artificial, machine learning, análisis de datos, tecnología en la nube y automatización.
            </p>
            <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.8', marginBottom: '32px' }}>
              Desde la primera línea de código hasta la estrategia de negocio, diseñamos tecnología adaptable a cada proyecto, enfocada en generar resultados escalables, rentables y con propósito.
            </p>
            <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.8' }}>
              Nuestro objetivo es construir un ecosistema de aplicaciones que impulsen la digitalización de distintos sectores.
            </p>
          </div>
        </section>

        {/* Cómo lo logramos Section */}
        <section style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.6s both' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1E3A8A', 
            margin: '0 0 40px 0', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #00D4AA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Cómo lo logramos
          </h2>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
            padding: '50px', 
            borderRadius: '24px',
            border: '2px solid #e2e8f0',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '22px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '24px', fontWeight: '600' }}>
              Convertimos ideas en soluciones sólidas a través de un proceso integral que combina tecnología, diseño y estrategia empresarial.
            </p>
            <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.8' }}>
              Cada proyecto nace de una visión clara y evoluciona dentro de un modelo estructurado que garantiza innovación, impacto y sostenibilidad.
            </p>
          </div>
        </section>

        {/* Nuestro proceso Section */}
        <section style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1E3A8A', 
            margin: '0 0 60px 0', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Nuestro proceso
          </h2>

          <div style={{ display: 'grid', gap: '40px' }}>
            {/* Step 1 */}
            <div style={{ 
              display: 'flex', 
              gap: '40px', 
              padding: '40px', 
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
              borderRadius: '24px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animation: 'slideInLeft 1s ease-out 1s both'
            }}>
              <div style={{ 
                minWidth: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(0, 212, 170, 0.4)'
              }}>
                1
              </div>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 20px 0' }}>
                  Ideación y análisis
                </h3>
                <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
                  Exploramos oportunidades de innovación a partir de una visión clara, evaluando su potencial en el mercado y definiendo soluciones con propósito, basadas en datos y orientadas al usuario.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ 
              display: 'flex', 
              gap: '40px', 
              padding: '40px', 
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
              borderRadius: '24px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animation: 'slideInLeft 1s ease-out 1.2s both'
            }}>
              <div style={{ 
                minWidth: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #0EA5E9 0%, #1E3A8A 100%)', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)'
              }}>
                2
              </div>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 20px 0' }}>
                  Diseño, marca y validación
                </h3>
                <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
                  Desarrollamos identidades de marca sólidas, alineadas con el público objetivo y la propuesta de valor. Validamos cada concepto antes de su desarrollo para garantizar coherencia y efectividad.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ 
              display: 'flex', 
              gap: '40px', 
              padding: '40px', 
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
              borderRadius: '24px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animation: 'slideInLeft 1s ease-out 1.4s both'
            }}>
              <div style={{ 
                minWidth: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(0, 212, 170, 0.4)'
              }}>
                3
              </div>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 20px 0' }}>
                  Desarrollo tecnológico
                </h3>
                <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
                  Transformamos conceptos en productos digitales funcionales mediante un enfoque integral que combina innovación, ingeniería y diseño. Nuestro proceso garantiza eficiencia, escalabilidad y una experiencia tecnológica de alto nivel.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ 
              display: 'flex', 
              gap: '40px', 
              padding: '40px', 
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
              borderRadius: '24px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animation: 'slideInLeft 1s ease-out 1.6s both'
            }}>
              <div style={{ 
                minWidth: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(30, 58, 138, 0.4)'
              }}>
                4
              </div>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 20px 0' }}>
                  Regulación legal
                </h3>
                <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
                  Nos aseguramos de que cada proyecto opere bajo el marco legal y fiscal mexicano, cumpliendo con las normativas aplicables y generando confianza en su implementación.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div style={{ 
              display: 'flex', 
              gap: '40px', 
              padding: '40px', 
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
              borderRadius: '24px',
              border: '2px solid #e2e8f0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              animation: 'slideInLeft 1s ease-out 1.8s both'
            }}>
              <div style={{ 
                minWidth: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #0EA5E9 0%, #00D4AA 100%)', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)'
              }}>
                5
              </div>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 20px 0' }}>
                  Crecimiento y optimización
                </h3>
                <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
                  Optimizamos modelos de negocio, estrategias de marketing y procesos operativos mediante analítica avanzada, impulsando un crecimiento sostenible, rentable y medible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '60px 60px 40px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            
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
                <li style={{ marginBottom: '12px' }}><span style={{ color: '#a5b4fc' }}>Nosotros</span></li>
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
  )
}

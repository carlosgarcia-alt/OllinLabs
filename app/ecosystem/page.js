export default function Ecosystem() {
  const projects = [
    {
      name: "Contlity",
      tagline: "Automatización Financiera y Fiscal con IA",
      description: "Automatiza la contabilidad, los procesos fiscales y la administración financiera con inteligencia artificial. Conecta con contadores verificados que trabajan sobre la infraestructura tecnológica de Contlity.",
      features: [
        "Reducción del 80% en tiempos administrativos",
        "Infraestructura en la nube AWS para seguridad y escalabilidad", 
        "Procesamiento inteligente de datos en tiempo real",
        "Integración con red de profesionales verificados"
      ],
      logo: "C",
      gradient: "linear-gradient(45deg, #00D4AA, #0EA5E9)",
      url: "#"
    },
    {
      name: "A la Mano",
      tagline: "Marketplace de Servicios para el Hogar",
      description: "Optimiza la atención de servicios domésticos y reparaciones mediante un marketplace confiable que digitaliza la gestión de servicios conectando a usuarios con expertos verificados a través de procesos seguros y trazables.",
      features: [
        "Red de proveedores de servicios verificados",
        "Contratación segura y rápida",
        "Digitalización de la economía local",
        "Procesos de trazabilidad automatizados"
      ],
      logo: "A",
      gradient: "linear-gradient(45deg, #1E3A8A, #00D4AA)",
      url: "https://alamano-customer-website.vercel.app/"
    },
    {
      name: "Mevi Pro",
      tagline: "Gestión Inteligente para Salones y Spas",
      description: "Digitaliza la administración de salones y spas con una solución integral que combina automatización, análisis de datos e inteligencia artificial para optimizar la operación y fortalecer la relación con los clientes.",
      features: [
        "Gestión integrada de citas y clientes",
        "Análisis e informes potenciados por IA",
        "Campañas de marketing automatizadas",
        "Control financiero centralizado"
      ],
      logo: "MP",
      gradient: "linear-gradient(45deg, #0EA5E9, #1E3A8A)",
      url: "https://mevi-sv1a.vercel.app/"
    }
  ];

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
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes drawLine {
            0% { opacity: 0; transform: scaleY(0); }
            50% { opacity: 1; transform: scaleY(1); }
            100% { opacity: 0.7; transform: scaleY(1); }
          }
          @keyframes countUp {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes rotateIn {
            from { transform: rotate(-180deg) scale(0); opacity: 0; }
            to { transform: rotate(0deg) scale(1); opacity: 1; }
          }
        `
      }} />

      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>O</span>
          </div>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Ollin Labs</span>
        </div>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Inicio</a>
          <a href="/nosotros" style={{ color: '#6b7280', textDecoration: 'none' }}>Nosotros</a>
          <span style={{ color: '#00D4AA', fontWeight: '500' }}>Ecosistema</span>
          <a href="/contacto" style={{ color: '#6b7280', textDecoration: 'none' }}>Contacto</a>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: '80px 60px', 
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Ecosystem Network Dashboard */}
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

            {/* Ecosystem Network */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ color: '#1E3A8A', margin: 0, fontSize: '16px' }}>Red de Aplicaciones</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                  <span style={{ fontSize: '12px', color: '#00D4AA' }}>Sincronizado</span>
                </div>
              </div>

              {/* Network Nodes */}
              <div style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Central Hub */}
                <div style={{ 
                  position: 'absolute',
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #00D4AA, #0EA5E9)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  animation: 'pulse 3s infinite',
                  zIndex: 2
                }}>
                  HUB
                </div>

                {/* Surrounding Apps */}
                {[
                  { name: 'FinTech', angle: 0, color: '#00D4AA' },
                  { name: 'E-Com', angle: 72, color: '#0EA5E9' },
                  { name: 'Health', angle: 144, color: '#1E3A8A' },
                  { name: 'Edu', angle: 216, color: '#00D4AA' },
                  { name: 'IoT', angle: 288, color: '#0EA5E9' }
                ].map((app, i) => {
                  const radius = 80;
                  const x = Math.cos((app.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((app.angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div key={i}>
                      {/* Connection Line */}
                      <div style={{
                        position: 'absolute',
                        width: '2px',
                        height: `${radius}px`,
                        background: `linear-gradient(to bottom, ${app.color}, transparent)`,
                        transformOrigin: 'bottom',
                        transform: `rotate(${app.angle}deg)`,
                        animation: `drawLine 4s ease-in-out infinite ${i * 0.5}s`
                      }}></div>
                      
                      {/* App Node */}
                      <div style={{ 
                        position: 'absolute',
                        left: `calc(50% + ${x}px - 20px)`,
                        top: `calc(50% + ${y}px - 20px)`,
                        width: '40px', 
                        height: '40px', 
                        background: app.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        animation: `countUp 2s ease-out ${i * 0.3 + 1}s both`,
                        boxShadow: `0 4px 12px ${app.color}40`
                      }}>
                        {app.name}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '20px' }}>
                <div style={{ textAlign: 'center', animation: 'countUp 2s ease-out 2s both' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E3A8A' }}>5</div>
                  <div style={{ fontSize: '10px', color: '#6b7280' }}>Aplicaciones</div>
                </div>
                <div style={{ textAlign: 'center', animation: 'countUp 2s ease-out 2.2s both' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E3A8A' }}>100%</div>
                  <div style={{ fontSize: '10px', color: '#6b7280' }}>Integración</div>
                </div>
                <div style={{ textAlign: 'center', animation: 'countUp 2s ease-out 2.4s both' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E3A8A' }}>24/7</div>
                  <div style={{ fontSize: '10px', color: '#6b7280' }}>Disponible</div>
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
            Nuestro Ecosistema<br />
            Digital Integrado
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280', 
            lineHeight: '1.6', 
            marginBottom: '40px', 
            maxWidth: '500px', 
            animation: 'fadeInUp 1.2s ease-out 0.6s both' 
          }}>
            Descubre nuestra suite integrada de soluciones inteligentes diseñadas para transformar empresas en diferentes industrias.
          </p>
        </div>
      </section>

      {/* Ecosystem Content */}
      <section style={{ padding: '80px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Contlity */}
        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
            padding: '50px', 
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
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
              <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', margin: 0 }}>
                Contlity
              </h2>
            </div>
            
            <p style={{ fontSize: '20px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '24px', fontWeight: '600' }}>
              Contlity es una plataforma SaaS que redefine la gestión financiera y fiscal mediante inteligencia artificial y automatización avanzada.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Su tecnología crea un entorno inteligente donde usuarios, contadores y empresas colaboran de forma fluida, centralizando la gestión de facturas, reportes y cumplimiento fiscal con los más altos estándares de seguridad y eficiencia.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Construida sobre infraestructura en la nube (AWS) y potenciada por machine learning, Contlity identifica patrones contables, proyecta flujos de efectivo y detecta inconsistencias en tiempo real. Integra AI Document Capture Software para digitalizar y clasificar automáticamente documentos fiscales, junto con AI Chat Software que funciona como asistente financiero conversacional, capaz de responder, generar reportes y ejecutar acciones mediante lenguaje natural.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Gracias a su arquitectura modular, se adapta a cada usuario e impulsa una contabilidad más digital, accesible y proactiva, transformando la gestión financiera tradicional en una experiencia inteligente que aprende, se anticipa y evoluciona con cada negocio.
            </p>
            <p style={{ fontSize: '20px', color: '#1E3A8A', lineHeight: '1.8', fontWeight: '600' }}>
              Representa el pilar tecnológico del ecosistema Ollin Labs, transformando la contabilidad tradicional en una experiencia digital, accesible y proactiva.
            </p>
          </div>

          {/* Contlity Animation */}
          <div style={{ marginTop: '40px', animation: 'slideInUp 1s ease-out 0.6s both' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)', 
              borderRadius: '20px', 
              padding: '32px',
              boxShadow: '0 25px 50px rgba(0, 212, 170, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {/* Financial Dashboard */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '28px', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ color: '#1E3A8A', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Panel Financiero</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                    <span style={{ fontSize: '12px', color: '#00D4AA', fontWeight: '500' }}>Sincronizado</span>
                  </div>
                </div>

                {/* Financial Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #00D4AA, #0EA5E9)', 
                    padding: '20px', 
                    borderRadius: '12px',
                    color: 'white',
                    animation: 'slideInLeft 2s ease-out 1s both'
                  }}>
                    <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>Ingresos</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', animation: 'countUp 3s ease-out 1.5s both' }}>$2.4M</div>
                    <div style={{ fontSize: '10px', opacity: 0.7 }}>+12% vs mes anterior</div>
                  </div>
                  
                  <div style={{ 
                    background: 'linear-gradient(135deg, #1E3A8A, #00D4AA)', 
                    padding: '20px', 
                    borderRadius: '12px',
                    color: 'white',
                    animation: 'slideInRight 2s ease-out 1.2s both'
                  }}>
                    <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>Gastos</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', animation: 'countUp 3s ease-out 1.7s both' }}>$1.8M</div>
                    <div style={{ fontSize: '10px', opacity: 0.7 }}>-5% optimización</div>
                  </div>
                </div>

                {/* AI Insights */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                  padding: '16px', 
                  borderRadius: '12px',
                  animation: 'fadeInUp 2s ease-out 2s both'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      AI
                    </div>
                    <span style={{ fontSize: '12px', color: '#1E3A8A', fontWeight: '600' }}>Insight Inteligente</span>
                  </div>
                  <p style={{ fontSize: '11px', color: '#4b5563', margin: 0, lineHeight: '1.4' }}>
                    Proyección: Flujo positivo de $600K para Q4. Recomiendo optimizar gastos operativos en 8%.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
                width: '60px', 
                height: '60px', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '50%',
                animation: 'float 4s ease-in-out infinite'
              }}></div>
            </div>
          </div>
        </div>

        {/* A la Mano */}
        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.6s both' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
            padding: '50px', 
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #0EA5E9 0%, #1E3A8A 100%)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                AM
              </div>
              <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', margin: 0 }}>
                A la Mano
              </h2>
            </div>
            
            <p style={{ fontSize: '20px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '24px', fontWeight: '600' }}>
              A la Mano es una plataforma que impulsa la digitalización de los servicios locales, conectando personas con profesionales verificados de manera rápida, transparente y segura.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Su modelo combina una aplicación de usuario y un panel profesional que funcionan en sincronía, facilitando la contratación, gestión y seguimiento de servicios como mantenimiento, limpieza, estética, carpintería y más.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Desarrollada con tecnologías web progresivas y bases de datos en la nube, A la Mano utiliza algoritmos de emparejamiento inteligente, geolocalización avanzada y mensajería interna cifrada para optimizar la experiencia tanto del usuario como del prestador. Además, ofrece herramientas de gestión como agendas dinámicas, estadísticas de rendimiento y sistemas de reputación basados en reseñas verificadas.
            </p>
            <p style={{ fontSize: '20px', color: '#1E3A8A', lineHeight: '1.8', fontWeight: '600' }}>
              A la Mano integra un sistema de suscripciones escalables para prestadores, junto con un modelo de comisión por transacción, creando un ecosistema autosostenible que digitaliza oficios y fomenta la economía local. Su enfoque tecnológico y humano la convierte en una de las soluciones más accesibles e inclusivas dentro del portafolio de Ollin Labs.
            </p>
          </div>

          {/* A la Mano Animation */}
          <div style={{ marginTop: '40px', animation: 'slideInUp 1s ease-out 0.8s both' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #0EA5E9 0%, #1E3A8A 100%)', 
              borderRadius: '20px', 
              padding: '32px',
              boxShadow: '0 25px 50px rgba(14, 165, 233, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {/* Services Map */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '28px', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ color: '#1E3A8A', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Servicios Locales</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', background: '#0EA5E9', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                    <span style={{ fontSize: '12px', color: '#0EA5E9', fontWeight: '500' }}>En vivo</span>
                  </div>
                </div>

                {/* Map Grid */}
                <div style={{ 
                  background: '#f8fafc', 
                  borderRadius: '12px', 
                  padding: '20px', 
                  marginBottom: '20px',
                  position: 'relative',
                  height: '120px'
                }}>
                  {/* Service Pins */}
                  {[
                    { service: 'Plomería', x: '20%', y: '30%', color: '#0EA5E9' },
                    { service: 'Limpieza', x: '60%', y: '20%', color: '#00D4AA' },
                    { service: 'Carpintería', x: '40%', y: '60%', color: '#1E3A8A' }
                  ].map((pin, i) => (
                    <div key={i} style={{ 
                      position: 'absolute',
                      left: pin.x,
                      top: pin.y,
                      animation: `bounceIn 2s ease-out ${1.5 + i * 0.3}s both`
                    }}>
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        background: pin.color,
                        borderRadius: '50% 50% 50% 0',
                        transform: 'rotate(-45deg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${pin.color}40`
                      }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          background: 'white',
                          borderRadius: '50%',
                          transform: 'rotate(45deg)'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connection Stats */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                  padding: '16px', 
                  borderRadius: '12px',
                  animation: 'fadeInUp 2s ease-out 2.5s both'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E3A8A' }}>247</div>
                      <div style={{ fontSize: '10px', color: '#6b7280' }}>Profesionales</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E3A8A' }}>1.2K</div>
                      <div style={{ fontSize: '10px', color: '#6b7280' }}>Servicios</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E3A8A' }}>98%</div>
                      <div style={{ fontSize: '10px', color: '#6b7280' }}>Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div style={{ 
                position: 'absolute', 
                top: '25px', 
                right: '25px', 
                width: '50px', 
                height: '50px', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '50%',
                animation: 'float 4s ease-in-out infinite 1s'
              }}></div>
            </div>
          </div>
        </div>

        {/* Mevi Pro */}
        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 0.8s both' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
            padding: '50px', 
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                MP
              </div>
              <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', margin: 0 }}>
                Mevi Pro
              </h2>
            </div>
            
            <p style={{ fontSize: '20px', color: '#1E3A8A', lineHeight: '1.8', marginBottom: '24px', fontWeight: '600' }}>
              Mevi Pro es una plataforma diseñada para profesionalizar la administración de salones de belleza, spas y barberías, combinando gestión operativa, atención al cliente y análisis inteligente en un solo entorno digital.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Desarrollada con arquitecturas en la nube, bases de datos escalables y un asistente virtual impulsado por IA llamado Mavi, Mevi Pro automatiza procesos cotidianos como reservas, control de ingresos, seguimiento de clientes y generación de reportes.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Su sistema integra módulos de analítica avanzada que permiten visualizar métricas de rendimiento, comportamiento de clientes, productividad del personal y tendencias de consumo. Gracias a su motor de recomendaciones, el negocio puede anticipar demanda, personalizar ofertas y mejorar la retención de clientes.
            </p>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8', marginBottom: '24px' }}>
              Además, Mevi Pro cuenta con aplicaciones web y móviles optimizadas, compatibles con múltiples dispositivos, asegurando una gestión fluida y en tiempo real.
            </p>
            <p style={{ fontSize: '20px', color: '#1E3A8A', lineHeight: '1.8', fontWeight: '600' }}>
              Más que una herramienta de administración, Mevi Pro es un asistente digital integral que impulsa la modernización de los servicios de belleza, ayudando a los negocios a escalar de forma eficiente y rentable.
            </p>
          </div>

          {/* Mevi Pro Animation */}
          <div style={{ marginTop: '40px', animation: 'slideInUp 1s ease-out 1s both' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #1E3A8A 0%, #00D4AA 100%)', 
              borderRadius: '20px', 
              padding: '32px',
              boxShadow: '0 25px 50px rgba(30, 58, 138, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {/* Salon Dashboard */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '28px', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ color: '#1E3A8A', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Salón Bella Vista</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                    <span style={{ fontSize: '12px', color: '#00D4AA', fontWeight: '500' }}>Mavi Online</span>
                  </div>
                </div>

                {/* Appointment Schedule */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px', fontWeight: '500' }}>Agenda del Día</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { time: '10:00', service: 'Corte + Peinado', client: 'María G.', status: 'progress', color: '#00D4AA' },
                      { time: '11:30', service: 'Manicure', client: 'Carmen L.', status: 'waiting', color: '#0EA5E9' },
                      { time: '13:00', service: 'Tinte + Corte', client: 'Sofia R.', status: 'scheduled', color: '#1E3A8A' }
                    ].map((appointment, i) => (
                      <div key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '12px 16px',
                        background: '#f8fafc',
                        borderRadius: '12px',
                        animation: `slideInLeft 2s ease-out ${1.5 + i * 0.3}s both`,
                        border: `2px solid ${appointment.status === 'progress' ? appointment.color : 'transparent'}`
                      }}>
                        <div style={{ 
                          width: '32px', 
                          height: '32px', 
                          background: appointment.color,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '10px',
                          fontWeight: 'bold',
                          marginRight: '12px'
                        }}>
                          {appointment.time.split(':')[0]}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#1E3A8A' }}>{appointment.service}</div>
                          <div style={{ fontSize: '10px', color: '#6b7280' }}>{appointment.client}</div>
                        </div>
                        <div style={{ 
                          width: '8px', 
                          height: '8px', 
                          borderRadius: '50%',
                          background: appointment.status === 'progress' ? '#00D4AA' : 
                                     appointment.status === 'waiting' ? '#f59e0b' : '#e5e7eb',
                          animation: appointment.status === 'progress' ? 'pulse 2s infinite' : 'none'
                        }}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mavi AI Assistant */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                  padding: '16px', 
                  borderRadius: '12px',
                  animation: 'bounceIn 2s ease-out 2.5s both'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      animation: 'pulse 2s infinite'
                    }}>
                      M
                    </div>
                    <span style={{ fontSize: '12px', color: '#1E3A8A', fontWeight: '600' }}>Mavi Assistant</span>
                  </div>
                  <p style={{ fontSize: '11px', color: '#4b5563', margin: 0, lineHeight: '1.4' }}>
                    💡 Sugerencia: María G. suele reservar tratamientos faciales. ¿Ofrecemos promoción 2x1?
                  </p>
                </div>
              </div>

              {/* Floating Beauty Elements */}
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                right: '15px', 
                width: '30px', 
                height: '30px', 
                background: 'rgba(255,255,255,0.15)', 
                borderRadius: '50%',
                animation: 'float 3s ease-in-out infinite'
              }}></div>
            </div>
          </div>
        </div>

        {/* Vision Summary */}
        <div style={{ marginBottom: '80px', animation: 'fadeInUp 1s ease-out 1s both' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A8A 0%, #0EA5E9 50%, #00D4AA 100%)', 
            padding: '60px', 
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(30, 58, 138, 0.3)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative elements */}
            <div style={{ 
              position: 'absolute', 
              top: '-50px', 
              right: '-50px', 
              width: '200px', 
              height: '200px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '50%' 
            }}></div>
            <div style={{ 
              position: 'absolute', 
              bottom: '-30px', 
              left: '-30px', 
              width: '150px', 
              height: '150px', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '50%' 
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(255,255,255,0.2)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.3)', borderRadius: '6px' }}></div>
                </div>
                <h2 style={{ fontSize: '42px', fontWeight: 'bold', margin: 0 }}>
                  Nuestra Visión
                </h2>
              </div>
              
              <div style={{ display: 'grid', gap: '32px' }}>
                <p style={{ fontSize: '22px', lineHeight: '1.7', margin: 0, opacity: 0.95 }}>
                  En resumen, cada solución desarrollada por Ollin Labs nace de un mismo principio: aprovechar la tecnología para simplificar, automatizar y potenciar la manera en que las personas y las empresas operan.
                </p>
                <p style={{ fontSize: '20px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Todas representan distintas expresiones de una misma visión: la transformación digital aplicada con inteligencia, diseño y propósito.
                </p>
                <p style={{ fontSize: '20px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Nuestro ecosistema conecta sectores y oportunidades, integrando inteligencia artificial, automatización y análisis de datos para generar impacto tangible.
                </p>
                <div style={{ 
                  padding: '24px', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <p style={{ fontSize: '24px', lineHeight: '1.6', fontWeight: '600', margin: 0 }}>
                    En Ollin Labs no solo desarrollamos software: construimos el futuro digital que impulsa la evolución de los negocios y mejora la vida cotidiana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Resumen */}
      <section style={{ padding: '0 60px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 24px 0' }}>
            Resumen del Ecosistema
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Tres soluciones integradas que transforman sectores completos
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', maxWidth: '1400px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '32px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f1f5f9'
            }}>
              
              {/* Logo & Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  background: project.gradient, 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>{project.logo}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 4px 0' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#00D4AA', fontWeight: '500', margin: 0 }}>
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6', marginBottom: '24px' }}>
                {project.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1E3A8A', marginBottom: '12px' }}>
                  Características Principales
                </h4>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {project.features.map((feature, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '8px',
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
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ 
                background: project.gradient,
                color: 'white', 
                border: 'none', 
                padding: '12px 24px', 
                borderRadius: '8px', 
                fontWeight: '500',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer'
              }}>
                Saber Más →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1E3A8A', color: 'white', padding: '60px 60px 40px' }}>
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

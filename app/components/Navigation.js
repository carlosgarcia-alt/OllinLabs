'use client';

export default function Navigation({ currentPage = 'inicio' }) {
  return (
    <nav className="nav-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#ffffff', animation: 'slideDown 0.8s ease-out' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src="/ollin-logo-new.svg" alt="Ollin Labs" style={{ height: '48px', width: 'auto' }} />
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Ollin Labs</span>
      </div>
      
      <div className="nav-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <a href="/" style={{ color: currentPage === 'inicio' ? '#00D4AA' : '#6b7280', fontWeight: currentPage === 'inicio' ? '500' : 'normal', textDecoration: 'none' }}>Inicio</a>
        <a href="/nosotros" style={{ color: currentPage === 'nosotros' ? '#00D4AA' : '#6b7280', fontWeight: currentPage === 'nosotros' ? '500' : 'normal', textDecoration: 'none' }}>Nosotros</a>
        <a href="/ecosystem" style={{ color: currentPage === 'ecosystem' ? '#00D4AA' : '#6b7280', fontWeight: currentPage === 'ecosystem' ? '500' : 'normal', textDecoration: 'none' }}>Ecosistema</a>
        
        <div 
          className="dropdown-container"
          style={{ position: 'relative' }}
        >
          <span 
            style={{ 
              color: currentPage.includes('soluciones') ? '#00D4AA' : '#6b7280', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: currentPage.includes('soluciones') ? '500' : 'normal'
            }}
          >
            Soluciones ▼
          </span>
          <div 
            className="dropdown-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 20px 60px rgba(30, 58, 138, 0.15), 0 0 0 1px rgba(0, 212, 170, 0.1)',
              borderRadius: '16px',
              padding: '16px 0',
              minWidth: '280px',
              display: 'none',
              zIndex: 1000,
              border: '1px solid rgba(0, 212, 170, 0.2)',
              marginTop: '12px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div style={{ padding: '0 20px 12px', borderBottom: '1px solid rgba(0, 212, 170, 0.1)', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#00D4AA', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Soluciones Tecnológicas</span>
            </div>
            <a href="/soluciones/agentes-ia" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: '#1E3A8A', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', borderLeft: '3px solid transparent', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)' }}></div>
              Agentes IA
            </a>
            <a href="/soluciones/rag" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: '#1E3A8A', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', borderLeft: '3px solid transparent', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(45deg, #0EA5E9, #1E3A8A)' }}></div>
              RAG (Retrieve Augmented Generation)
            </a>
            <a href="/soluciones/computer-vision" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: '#1E3A8A', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', borderLeft: '3px solid transparent', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)' }}></div>
              Computer Vision
            </a>
            <a href="/soluciones/data-analytics" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: '#1E3A8A', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', borderLeft: '3px solid transparent', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(45deg, #00D4AA, #0EA5E9)' }}></div>
              Data and Analytics
            </a>
            <a href="/soluciones/ui-ux" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: '#1E3A8A', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', borderLeft: '3px solid transparent', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(45deg, #0EA5E9, #1E3A8A)' }}></div>
              UI UX
            </a>
            <a href="/soluciones/plataformas-saas" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: '#1E3A8A', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', borderLeft: '3px solid transparent', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(45deg, #1E3A8A, #00D4AA)' }}></div>
              Plataformas SaaS
            </a>
          </div>
        </div>
        
        <a href="/contacto" style={{ color: currentPage === 'contacto' ? '#00D4AA' : '#6b7280', fontWeight: currentPage === 'contacto' ? '500' : 'normal', textDecoration: 'none' }}>Contacto</a>
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      </div>
    </nav>
  );
}

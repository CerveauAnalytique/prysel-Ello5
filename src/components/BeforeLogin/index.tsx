import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/prysel_logo.png"
        alt="Prysel Logo"
        style={{ height: '36px', width: 'auto', margin: '0 auto 12px auto' }}
      />
      <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 700 }}>
        Prysel Admin Portal
      </h3>
      <p style={{ margin: 0, fontSize: '13px', opacity: 0.7 }}>
        Sign in to manage AI Models, Tournaments, Pages, and Website Content.
      </p>
    </div>
  )
}

export default BeforeLogin

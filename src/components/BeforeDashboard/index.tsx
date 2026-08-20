import React from 'react'

const BeforeDashboard: React.FC = () => {
  return (
    <div
      style={{
        background: 'var(--theme-elevation-50, #18181b)',
        border: '1px solid var(--theme-elevation-150, #27272a)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/prysel_logo.png" alt="Prysel Logo" style={{ height: '32px', width: 'auto' }} />
          <div>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>Prysel Admin Wings & Control Panel</h2>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Manage website collections, AI Models, Tournaments, and Content.</p>
          </div>
        </div>

        <a
          href="/"
          target="_blank"
          style={{
            background: '#f97316',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          🌐 Visit Live Website →
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '16px' }}>
        <a
          href="/admin/collections/ai-models"
          style={{
            background: 'var(--theme-elevation-100, #27272a)',
            border: '1px solid var(--theme-elevation-200, #3f3f46)',
            borderRadius: '8px',
            padding: '12px 16px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div style={{ fontSize: '18px' }}>🤖</div>
          <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>AI Models</div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>Manage & upload models</div>
        </a>

        <a
          href="/admin/collections/tournaments"
          style={{
            background: 'var(--theme-elevation-100, #27272a)',
            border: '1px solid var(--theme-elevation-200, #3f3f46)',
            borderRadius: '8px',
            padding: '12px 16px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div style={{ fontSize: '18px' }}>🏆</div>
          <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Tournaments</div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>Manage Behest arenas</div>
        </a>

        <a
          href="/admin/collections/pages"
          style={{
            background: 'var(--theme-elevation-100, #27272a)',
            border: '1px solid var(--theme-elevation-200, #3f3f46)',
            borderRadius: '8px',
            padding: '12px 16px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div style={{ fontSize: '18px' }}>📄</div>
          <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Pages</div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>Edit site pages</div>
        </a>

        <a
          href="/admin/collections/posts"
          style={{
            background: 'var(--theme-elevation-100, #27272a)',
            border: '1px solid var(--theme-elevation-200, #3f3f46)',
            borderRadius: '8px',
            padding: '12px 16px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div style={{ fontSize: '18px' }}>📝</div>
          <div style={{ fontWeight: 600, fontSize: '14px', marginTop: '4px' }}>Posts</div>
          <div style={{ fontSize: '11px', opacity: 0.6 }}>Articles & news</div>
        </a>
      </div>

      <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--theme-elevation-150, #27272a)', fontSize: '11px', opacity: 0.6, display: 'flex', justifyContent: 'space-between' }}>
        <span>Prysel INC · Admin Dashboard</span>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/behest" target="_blank" style={{ color: 'inherit' }}>Behest</a>
          <a href="/models" target="_blank" style={{ color: 'inherit' }}>Models</a>
          <a href="/docu" target="_blank" style={{ color: 'inherit' }}>Docu</a>
          <a href="/privacy" target="_blank" style={{ color: 'inherit' }}>Privacy</a>
        </div>
      </div>
    </div>
  )
}

export default BeforeDashboard

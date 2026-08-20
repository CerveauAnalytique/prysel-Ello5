import React from 'react'

export const AdminHeaderBar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '6px 12px',
        background: 'var(--theme-elevation-50, #18181b)',
        borderRadius: '8px',
        border: '1px solid var(--theme-elevation-150, #27272a)',
        fontSize: '13px',
      }}
    >
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--theme-text, #f4f4f5)',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/prysel_logo.png" alt="Prysel Logo" style={{ height: '22px', width: 'auto' }} />
        <span>🌐 View Site</span>
      </a>

      <span style={{ opacity: 0.3 }}>|</span>

      {/* Admin Wings Shortcuts */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a
          href="/behest"
          target="_blank"
          style={{ color: 'var(--theme-elevation-400, #a1a1aa)', textDecoration: 'none' }}
        >
          🏆 Behest
        </a>
        <a
          href="/models"
          target="_blank"
          style={{ color: 'var(--theme-elevation-400, #a1a1aa)', textDecoration: 'none' }}
        >
          🤖 Models
        </a>
        <a
          href="/docu"
          target="_blank"
          style={{ color: 'var(--theme-elevation-400, #a1a1aa)', textDecoration: 'none' }}
        >
          📚 Docu
        </a>
        <a
          href="/privacy"
          target="_blank"
          style={{ color: 'var(--theme-elevation-400, #a1a1aa)', textDecoration: 'none' }}
        >
          🛡️ Privacy
        </a>
      </div>

      <span style={{ opacity: 0.3 }}>|</span>

      {/* CMS Wings */}
      <div style={{ display: 'flex', itemsAlign: 'center', gap: '8px' }}>
        <a
          href="/admin/collections/ai-models"
          style={{
            background: 'var(--theme-elevation-100, #27272a)',
            padding: '3px 8px',
            borderRadius: '4px',
            color: '#f97316',
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          + AI Models
        </a>
        <a
          href="/admin/collections/tournaments"
          style={{
            background: 'var(--theme-elevation-100, #27272a)',
            padding: '3px 8px',
            borderRadius: '4px',
            color: '#f97316',
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          + Tournaments
        </a>
      </div>
    </div>
  )
}

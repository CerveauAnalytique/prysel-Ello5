import React from 'react'

export const AdminLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 py-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/prysel_logo.png"
        alt="Prysel Admin Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  )
}

export const AdminIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/prysel_logo.png"
        alt="Prysel Admin Icon"
        className="h-6 w-auto object-contain"
      />
    </div>
  )
}

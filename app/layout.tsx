import React from 'react';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-indigo-800 to-purple-900">
        {children}
      </body>
    </html>
  );
}

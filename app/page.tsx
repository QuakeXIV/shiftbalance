"use client"; // Dizemos ao Next.js que esta página tem coisas interativas (botões)

import { useState } from 'react';

export default function Home() {
  // Isto é JS puro: criamos uma "variável" que o React vigia
  const [status, setStatus] = useState("Sistema Offline");

  return (
    <main style={{ 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh', 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#ffbc0d', fontSize: '3rem' }}>ShiftBalance</h1>
      <p style={{ fontSize: '1.2rem' }}>Estado: <strong>{status}</strong></p>
      
      <button 
        onClick={() => setStatus("Turno Iniciado - Bom trabalho!")}
        style={{ 
          backgroundColor: '#db0007', 
          color: 'white', 
          border: 'none', 
          padding: '15px 30px', 
          fontSize: '1rem', 
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        Iniciar Turno no McDonald's
      </button>
    </main>
  );
}
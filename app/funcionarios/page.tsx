"use client";

import { useState } from 'react';
import BotaoMenu from '../../components/BotaoMenu';

export default function PaginaFuncionarios() {
  // O nosso tabuleiro agora guarda uma lista de nomes
  const [equipa, setEquipa] = useState(['Pedro', 'Maria', 'João']);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Gestão de Equipa</h1>

      <ul>
        {/* O .map() percorre a lista e cria um <li> para cada nome */}
        {equipa.map((nome) => (
          <li key={nome} style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            {nome}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => setEquipa([...equipa, 'Novo Funcionário'])}
        style={{ marginTop: '20px', padding: '10px' }}
      >
        Adicionar Alguém à Equipa
      </button>

      <hr style={{ margin: '30px 0' }} />
      <BotaoMenu texto="Voltar ao Início" destino="/" />
    </div>
  );
}
"use client";

import { useState } from 'react';
import BotaoMenu from '../../components/BotaoMenu';

export default function PaginaFuncionarios() {
  const [equipa, setEquipa] = useState(['Pedro', 'Maria', 'João']);
  
  // Este tabuleiro guarda o que estás a escrever agora
  const [nomeDigitado, setNomeDigitado] = useState("");

  const adicionarFuncionario = () => {
    if (nomeDigitado !== "") { // Só adiciona se não estiver vazio
      setEquipa([...equipa, nomeDigitado]); // Adiciona o que escreveste à lista
      setNomeDigitado(""); // Limpa o campo de escrita depois de adicionar
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Gestão de Equipa</h1>

      {/* 1. CAMPO DE ESCRITA (INPUT) */}
      <input 
        type="text" 
        placeholder="Nome do funcionário..."
        value={nomeDigitado} // O valor que aparece é o que está no tabuleiro
        onChange={(e) => setNomeDigitado(e.target.value)} // Sempre que escreves, muda o tabuleiro
        style={{ padding: '10px', fontSize: '1rem' }}
      />

      <button onClick={adicionarFuncionario} style={{ padding: '10px', marginLeft: '10px' }}>
        Adicionar à Equipa
      </button>

      {/* 2. A LISTA */}
      <ul style={{ marginTop: '30px' }}>
        {equipa.map((nome, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{nome}</li>
        ))}
      </ul>

      <hr style={{ margin: '30px 0' }} />
      <BotaoMenu texto="Voltar ao Início" destino="/" />
    </div>
  );
}
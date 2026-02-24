"use client"; // 1. Dizemos que a página é interativa

import { useState } from 'react'; // 2. Pedimos o "tabuleiro" (Hook)
import BotaoMenu from '../../components/BotaoMenu';

export default function PaginaFuncionarios() {
  // 3. Criamos o tabuleiro. Nome atual: 'escolhido'. Função para mudar: 'setEscolhido'.
  const [escolhido, setEscolhido] = useState("Nenhum");

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Gestão de Equipa</h1>
      
      {/* Aqui mostramos o que está no "tabuleiro" neste momento */}
      <p>Funcionário selecionado: <strong>{escolhido}</strong></p>

      <div style={{ marginTop: '20px' }}>
        {/* Quando clicamos, a mão (setEscolhido) muda o valor no tabuleiro */}
        <button onClick={() => setEscolhido("Pedro")}>Selecionar Pedro</button>
        <button onClick={() => setEscolhido("Maria")}>Selecionar Maria</button>
      </div>

      <hr style={{ margin: '30px 0' }} />
      <BotaoMenu texto="Voltar ao Início" destino="/" />
    </div>
  );
}
"use client";

import { useState } from 'react';
import BotaoMenu from '../../components/BotaoMenu';
import CardFuncionario from '@/components/CardFuncionarios';
import { formatarHoras } from '@/utils/calculos';  

export default function PaginaFuncionarios() {

    // No topo do ficheiro, com os outros states:
    const [horas, setHoras] = useState("");


    const [equipa, setEquipa] = useState([{ nome: 'Pedro', cargo: 'Geral', horas: 8 }]); // Este tabuleiro guarda a lista de funcionários, começa com um exemplo

    // Este tabuleiro guarda o que estás a escrever agora
    const [nomeDigitado, setNomeDigitado] = useState("");

    const [cargo, setCargo] = useState("");

    const adicionarFuncionario = () => {
        if (nomeDigitado !== "" && cargo !== "" && horas !== "") {

            const novoFuncionario = {
                nome: nomeDigitado,
                cargo: cargo,
                horas: Number(horas) // Convertemos para número
            };

            setEquipa([...equipa, novoFuncionario]);

            // Limpamos tudo
            setNomeDigitado("");
            setCargo("");
            setHoras("");
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

            <input
                type='text'
                placeholder='Cargo do funcionário...'
                value={cargo}
                onChange={(v) => setCargo(v.target.value)}
                style={{ padding: '10px', fontSize: '1rem' }}
            />

            <input
                type="number"
                placeholder="Horas de turno..."
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
                style={{ padding: '10px', fontSize: '1rem', marginLeft: '5px' }}
            />

            <button onClick={adicionarFuncionario} style={{ padding: '10px', marginLeft: '10px' }}>
                Adicionar à Equipa
            </button>



            {/* 2. A LISTA */}
            <ul style={{ marginTop: '30px' }}>
                {equipa.map((funcionario, index) => (
                    <CardFuncionario key={index} nome={funcionario.nome} cargo={funcionario.cargo} horas={funcionario.horas} />
                ))}
            </ul>

            <hr style={{ margin: '30px 0' }} />
            <BotaoMenu texto="Voltar ao Início" destino="/" />
        </div>
    );
}
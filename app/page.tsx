import BotaoMenu from '../components/BotaoMenu';

export default function Home() {
  return (
    <main style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#db0007' }}>ShiftBalance</h1>
      <p>Gestão Operacional McDonald's</p>

      <div style={{ marginTop: '30px' }}>
        {/* Passamos o texto e a rota (o nome da pasta que criaste) */}
        <BotaoMenu texto="Ver Dashboard" destino="/dashboard" />
        <BotaoMenu texto="Equipa de Funcionários" destino="/funcionarios" />
      </div>
    </main>
  );
}
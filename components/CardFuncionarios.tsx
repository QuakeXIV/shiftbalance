// Definimos o que a "Mochila" do funcionário deve conter
interface FuncionarioProps {
  nome: string;
  cargo: string;
}

export default function CardFuncionario({ nome, cargo }: FuncionarioProps) {
  return (
    <div style={{
      border: '1px solid #ffbc0d',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      color: '#333',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div>
        <h3 style={{ margin: 0 }}>{nome}</h3>
        <p style={{ margin: 0, color: '#666' }}>{cargo}</p>
      </div>
      <span style={{ fontSize: '0.8rem', backgroundColor: '#eee', padding: '5px', borderRadius: '5px' }}>
        Ativo
      </span>
    </div>
  );
}
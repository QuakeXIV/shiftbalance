// Importamos o Link do Next.js
import Link from 'next/link';

// Agora o nosso botão aceita 'texto' e 'destino'
export default function BotaoMenu({ texto, destino }: { texto: string, destino: string }) {
  return (
    <Link href={destino} style={{ textDecoration: 'none' }}>
      <button style={{
        backgroundColor: '#ffbc0d',
        color: '#db0007',
        border: '2px solid #db0007',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: '5px',
        display: 'inline-block'
      }}>
        {texto}
      </button>
    </Link>
  );
}
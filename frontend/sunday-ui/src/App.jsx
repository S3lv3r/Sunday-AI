import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(err => console.error('Error al conectar con el backend:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Estado del backend:</h1>
      <p className="mt-2 text-blue-600">{status}</p>
    </div>
  );
}

export default App;

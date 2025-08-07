import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    seterror('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      router.push('/home'); // Redireciona após login
    } else {
      seterror(data.message || 'error ao fazer login');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DFD2C3]">
      <form
        onSubmit={handleLogin}
        className="bg-[#DFD2C3] p-8 rounded-xl w-full max-w-sm"
      >
        <h2 className="text-2xl text-[#AD7611] font-semibold mb-2 text-center">ENTRAR</h2>
        <p className="text-center text-sm font-medium mb-6">Acesse com sua conta digitando seu email e senha abaixo.</p>

        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border rounded mb-4 text-sm text-[#4E331B] outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border rounded mb-4 text-sm text-[#4E331B] outline-none"
          value={password}
          onChange={e => setpassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#4E331B] text-white text-sm py-2 rounded"
        >
          Acessar
        </button>
        <p className="mt-6 text-center text-xs">Política de privacidade</p>
      </form>
    </div>
  );
}

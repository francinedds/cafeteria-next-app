import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CaretLeftIcon, SignOutIcon } from '@phosphor-icons/react';

import * as Avatar from '@radix-ui/react-avatar';

import Layout from '@/components/Layout';

type User = {
  email: string;
  user?: string;
  phone?: string;
  avatarUrl?: string;
};

export default function User() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) return <p>Carregando...</p>;

  return (
    <>
      <header className="relative flex items-center w-full h-15 bg-white p-4">
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold">
          MEU PERFIL
        </h2>
      </header>
      <div className="pb-24 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-xl p-8 w-[300px] flex flex-col items-center">
          <Avatar.Root
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '100%',
              width: 100,
              height: 100,
              backgroundColor: '#4E331B',
              overflow: 'hidden',
              userSelect: 'none',
            }}
          >
            {user.avatarUrl ? (
              <Avatar.Image
                src={user.avatarUrl}
                alt={`${user.user || 'Usuário'} avatar`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <Avatar.Fallback
                delayMs={600}
                style={{
                  color: '#fff',
                  fontSize: 40,
                  fontWeight: 'bold',
                  userSelect: 'none',
                }}
              >
                {(user.user || user.email)[0].toUpperCase()}
              </Avatar.Fallback>
            )}
          </Avatar.Root>

          <h2 className="mt-4 mb-2 text-sm font-semibold">Bem-vindo, {user.user}</h2>
          <p className="text-sm">{user.email}</p>
          <p className="text-sm">{user.phone}</p>
          <button onClick={logout} className="mt-6 flex flex-row">
            <SignOutIcon size={22} />
            <span className="text-sm ml-2">Sair</span>
          </button>
        </div>
      </div>
    </>
  );
}

User.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
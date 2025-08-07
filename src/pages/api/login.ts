import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  // Login fixo (sem banco)
  const fakeUser = {
    email: 'admin@cafeteria.com',
    password: '123',
  };

  if (email === fakeUser.email && password === fakeUser.password) {
    return res.status(200).json({ message: 'Login bem-sucedido' });
  }

  return res.status(401).json({ message: 'Email ou senha incorretos' });
}

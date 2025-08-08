import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  // Usuário mockado (sem banco)
  const fakeUser = {
    email: 'admin@cafeteria.com',
    password: '123',
    user: 'Administrador',
    phone: '(00) 00000-0000',
    ocupation: 'Dono da cafeteria'
    
  };

  if (email === fakeUser.email && password === fakeUser.password) {
    return res.status(200).json({
      message: 'Login bem-sucedido!',
      user: {
        email: fakeUser.email,
        user: fakeUser.user,
        phone: fakeUser.phone,
        ocupation: fakeUser.ocupation
      }
    });
  }

  return res.status(401).json({ message: 'Email ou senha incorretos!' });
}

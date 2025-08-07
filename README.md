# Cafeteria Next App ☕️

## Sobre o projeto

Este foi a minha **primeira tentativa de construir um app** usando **Next.js**, com foco em um design **mobile-first**. A ideia foi criar um app para uma cafeteria, com catálogo de produtos, navegação otimizada para celular e estrutura moderna com Next.js.

O projeto foi desenvolvido para colocar em prática os conhecimentos adquiridos em frontend, principalmente na organização de rotas, que possui funcionalidade nativa no Next.

---

## Tecnologias utilizadas

- **Framework**: Next.js (React com rotas integradas)
- **Estilização**: Tailwind CSS (mobile-first).
- **Imagem**: `next/image` para otimização automática
- **Roteamento**: Páginas em `pages/` (ou `/app` se for Next.js 13+)
- **Deploy**: Vercel

---

## Funcionalidades

- Layout **mobile-first**, pensado e testado principalmente em dispositivos móveis.
- Página inicial com destaque a itens de menu.
- Rotas dinâmicas para páginas de produto (`/products/[slug]`)
- Componente de **carrinho** (*bag*) para adicionar/excluir itens e revisar pedidos.
- Componentização clara e clean (SplashScreen, Login, Navbar, Card de produtos, Footer etc.)
- Animação usando LottieFiles.

---

## Como rodar localmente

### Pré-requisitos

- Node.js (versão LTS)
- Gerenciador de pacotes: npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/francinedds/cafeteria-next-app.git
cd cafeteria-next-app

# Instale dependências
npm install
# ou
yarn install

# Execute em modo de desenvolvimento
npm run dev
# ou
yarn dev


# Cafeteria Next App ☕️

## Sobre o projeto

Este foi a minha **primeira tentativa de construir um app** usando **Next.js**, que apelidei carinhosamente de **De Grão em Grão**, com foco em um design **mobile-first**. A ideia foi criar um app para uma cafeteria, com catálogo de produtos, navegação otimizada para celular e estrutura moderna com Next.js.

O projeto foi desenvolvido para colocar em prática os conhecimentos adquiridos em frontend, principalmente na organização de rotas, que possui funcionalidade nativa no Next.

O design deste projeto foi criado no [Figma](https://figma.com) para facilitar o planejamento visual e a prototipagem da interface. Você pode conferir aqui:
[De Grão em Grão](https://www.figma.com/design/MtcIuvXV0domcp5Hv303UD/Coffee-App?node-id=0-1&p=f&t=Wrm8mOqSHKuUocoE-0)

⚠️ Importante:
Caso queira testar a função de login, aqui está o e-mail e a senha:
- **E-mail**: admin@cafeteria.com
- **Senha**: 123

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
```

## Aprendizados

- Exploração do **Next.js**: rotas automáticas, paginação.
- Desenvolvimento com abordagem **mobile-first**: responsividade desde o início.
- **Componentização** e organização funcional dos componentes.
- Implementação simples de uma **bag (carrinho)** com estado local ou Context API.
- Uso básico de **otimização de imagens com `next/image`**.

---

## Contribuição

Este projeto foi feito como **estudo**, por isso aceito sugestões, melhorias no design, novas funcionalidades ou ajustes no carrinho. Sinta-se à vontade para abrir **issues** ou enviar **pull requests**.



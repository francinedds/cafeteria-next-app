  export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    rating?: number; 
  };
  
  const menu = [
    {
      id: '1',
      name: 'Café espresso com leite',
      price: 12.00,
      description: 'Café com leite vaporizado e espuma.',
      image: '/cafes/cafe-com-leite.png',
      rating: 4.5
    },
    {
      id: '2',
      name: 'Capuccino com canela',
      price: 15.00,
      description: 'Café com leite vaporizado com chantilly e canela.',
      image: '/cafes/capuccino.png',
      rating: 4.5
    },
    {
      id: '3',
      name: 'Café puro coado na hora',
      price: 8.00,
      description: 'Um café forte e encorpado.',
      image: '/cafes/cafe-puro.png',
      rating: 4.5
    },
    {
      id: '4',
      name: 'Café gelado cremoso',
      price: 18.00,
      description: 'O famoso café coreano Dalgona.',
      image: '/cafes/cafe-gelado.png',
      rating: 4.5
    },
  ];
  
  export default menu;
  
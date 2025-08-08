import Link from 'next/link';
import menu, { Product } from '@/data/menu';
import Image from 'next/image';
import { useBag } from '@/context/BagContext';
import { StarIcon, ShoppingBagIcon } from '@phosphor-icons/react';
import Layout from '@/components/Layout';
import { ReactElement } from 'react';

export default function Home() {
  const { addToBag } = useBag();

  return (
    <div className="p-6 pb-24">
      <h1 className="text-4xl text-center mt-8 mb-2">Nossos Cafés</h1>
      <p className="text-sm text-center text-[#4E331B] font-medium mb-2">
        É sempre uma boa hora para um <span className="text-[#AD7611]">café</span>.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {menu.map((item: Product) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-xl transition mt-5 bg-white overflow-hidden shadow-sm hover:shadow-md"
          >
            <Link href={`/product/${item.id}`} legacyBehavior>
              <a>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-sm font-semibold mb-2">{item.name}</h2>

                  <div className="flex items-center gap-1 text-yellow-500 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        size={16}
                        weight={i < Math.round(item.rating ?? 0) ? 'fill' : 'regular'}
                      />
                    ))}
                  </div>

                  <p className="text-md text-zinc-950 font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </a>
            </Link>

            <button
              className="flex justify-center items-center w-full bg-[#4E331B] text-white p-2 hover:opacity-90 transition"
              onClick={() =>
                addToBag({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  quantity: 1,
                })
              }
            >
              <ShoppingBagIcon size={30} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Parte que diz ao next quais telas terão o componente layout (e no caso, uma navbar)
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
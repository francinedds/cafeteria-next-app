import React, { ReactElement } from 'react';
import { useBag } from '@/context/BagContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { TrashIcon } from '@phosphor-icons/react';

export default function Bag() {
  const { bag, removeFromBag } = useBag();

  const total = bag.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mx-auto">
      {bag.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <DotLottieReact
            src="/animations/shopping-bag-empty-teste.json"
            loop
            autoplay
          />
          <p className="text-center text-[#4E331B] -mt-6">Sua sacola está vazia.</p>
        </div>
      ) : (
        <>
          <header className="relative flex items-center justify-center w-full h-15 bg-white p-4">
            <h2 className="font-semibold absolute left-1/2 transform -translate-x-1/2">
              MINHA SACOLA
            </h2>
          </header>

          <ul className='px-6 mt-6'>
            {bag.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm">Quantidade: {item.quantity}</p>
                    <p className="text-sm font-bold">
                    R${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center text-right">
                  <button
                    className="text-red-600 text-sm mt-1 hover:underline"
                    onClick={() => removeFromBag(item.id)}
                  >
                    <TrashIcon size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="px-6 text-right ">
            <p className="text-sm font-bold">
              Total: R${ total.toFixed(2) }
            </p>

            <button
              className="mt-4 bg-[#4E331B] text-sm text-white px-4 py-2 rounded hover:bg-[#3e2716]"
              onClick={() => alert('Implementar checkout')}
            >
              Finalizar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

Bag.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

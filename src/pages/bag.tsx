import React, { ReactElement } from 'react';
import { useBag } from '@/context/BagContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Layout from '@/components/Layout';
import { TrashIcon } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Bag() {
  const { bag, removeFromBag } = useBag();

  const total = bag.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-md mx-auto">
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
          <h2 className="text-xl text-[#AD7611] font-semibold mb-4">Sacola</h2>
          <ul>
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
                    <p className="font-semibold">{item.name}</p>
                    <p>Quantidade: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    R${ (item.price * item.quantity).toFixed(2) }
                  </p>
                  <button
                    className="text-red-600 text-sm mt-1 hover:underline"
                    onClick={() => removeFromBag(item.id)}
                  >
                    <TrashIcon size={24}/>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-lg font-bold">
              Total: R${ total.toFixed(2) }
            </p>

            <button
              className="mt-4 bg-[#4E331B] text-white px-4 py-2 rounded hover:bg-[#3e2716]"
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

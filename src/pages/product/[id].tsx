import { useRouter } from 'next/router';
import menu from '@/data/menu';
import Image from 'next/image';
import Link from 'next/link';
import { CaretLeftIcon } from "@phosphor-icons/react";
import { ReactElement } from 'react';
import Layout from '@/components/Layout';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = menu.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-center text-gray-500">Produto não encontrado.</p>
        <div className="text-center mt-4">
          <Link href="/home">
            <span className="text-blue-600 underline">Voltar ao menu.</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 mx-auto">
      <Link href="/home">
        <span className="text-[#4E331B] underline block mb-4">
          <CaretLeftIcon size={32} />
        </span>
      </Link> 

      <h1 className="text-4xl text-center mt-10 mb-2">Nosso produto</h1>
      <p className="text-sm text-center text-[#4E331B] font-medium mb-4">
        É sempre uma boa hora para um <span className="text-[#AD7611]">café</span>.
      </p>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="w-full object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-zinc-700 mb-2">{product.description}</p>
          <p className="text-xl font-bold text-[#AD7611]">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

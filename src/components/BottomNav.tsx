import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HouseIcon, UserIcon, ShoppingBagIcon } from '@phosphor-icons/react';
import { useBag } from '@/context/BagContext';

const BottomNav: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const { bag } = useBag();
  const totalItems = bag.reduce((acc, item) => acc + item.quantity, 0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const userRoute = isLoggedIn ? '/user' : '/login';

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="fixed bottom-0 w-full flex justify-around items-center bg-white border-t border-gray-200 h-16 z-50">
      {/* Sacola */}
      <Link href="/bag">
        <div className="relative flex flex-col items-center">
          <ShoppingBagIcon size={28} className={isActive('/bag') ? 'text-[#4E331B]' : 'text-gray-500'} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </Link>

      {/* Home (destaque central) */}
      <Link href="/home">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center -mt-6 shadow-md bg-[#4E331B] ${isActive('/home') ? 'ring-2 ring-[#AD7611]' : ''}`}>
          <HouseIcon size={28} color="#fff" />
        </div>
      </Link>

      {/* User (Login ou Perfil) */}
      <Link href={userRoute}>
        <div className="flex flex-col items-center">
          <UserIcon size={28} className={isActive(userRoute) ? 'text-[#4E331B]' : 'text-gray-500'} />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;


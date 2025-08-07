import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './BottomNav.module.css';
import { HouseIcon, UserIcon, ShoppingBagIcon } from '@phosphor-icons/react';
import { useBag } from '@/context/BagContext';

const BottomNav: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const { bag } = useBag();
  const totalItems = bag.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={styles.nav}>
      <Link href="/bag" passHref legacyBehavior>
        <a className={currentPath === '/bag' ? styles.active : ''} style={{ position: 'relative' }}>
          <ShoppingBagIcon size={28} />
          {totalItems > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -4,
                right: -4,
                backgroundColor: 'red',
                color: 'white',
                fontSize: 10,
                width: 16,
                height: 16,
                borderRadius: '999px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {totalItems}
            </span>
          )}
        </a>
      </Link>

      <div className={styles.homeWrapper}>
        <Link href="/home" passHref legacyBehavior>
          <a
            className={`${styles.homeButton} ${
              currentPath === '/home' ? styles.active : ''
            }`}
          >
            <HouseIcon size={28} color="#fff" />
          </a>
        </Link>
      </div>

      <Link href="/user" passHref legacyBehavior>
        <a className={currentPath === '/user' ? styles.active : ''}>
          <UserIcon size={28} />
        </a>
      </Link>
    </nav>
  );
};

export default BottomNav;

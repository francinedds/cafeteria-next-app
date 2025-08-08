import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/home');
    }, 3000); // 3000s

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#BFA78D]">
      <Image src="/logo.svg" alt="logo" width={250} height={250} />
    </div>
  );
}

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type BagProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type BagContextType = {
  bag: BagProduct[];
  addToBag: (product: BagProduct) => void;
  removeFromBag: (id: string) => void;
};

const BagContext = createContext<BagContextType | undefined>(undefined);

export function BagProvider({ children }: { children: ReactNode }) {
  const [bag, setBag] = useState<BagProduct[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("bag");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const addToBag = (product: BagProduct) => {
    setBag(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      }
      return [...prev, product];
    });
  };

  const removeFromBag = (id: string) => {
    setBag(prev => prev.filter(p => p.id !== id));
  };

  return (
    <BagContext.Provider value={{ bag, addToBag, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
}

export const useBag = (): BagContextType => {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag deve estar dentro de BagProvider");
  return context;
};

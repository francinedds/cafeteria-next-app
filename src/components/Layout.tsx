// components/Layout.tsx
import BottomNav from "./BottomNav";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <BottomNav />
    </div>
  );
}

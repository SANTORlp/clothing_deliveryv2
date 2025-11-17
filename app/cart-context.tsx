"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  price: string; // ej: "$89"
};

export type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeOne: (productId: string) => void;
  removeAll: (productId: string) => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

function parsePrice(price: string): number {
  const numeric = parseInt(price.replace(/[^0-9]/g, ""), 10);
  return Number.isNaN(numeric) ? 0 : numeric;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  const removeOne = (productId: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeAll = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const { totalItems, totalPrice } = useMemo(() => {
    const totals = items.reduce(
      (acc, item) => {
        acc.totalItems += item.quantity;
        acc.totalPrice += parsePrice(item.price) * item.quantity;
        return acc;
      },
      { totalItems: 0, totalPrice: 0 }
    );
    return totals;
  }, [items]);

  const value: CartContextValue = {
    items,
    addItem,
    removeOne,
    removeAll,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

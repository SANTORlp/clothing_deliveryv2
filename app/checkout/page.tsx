"use client";

import Link from "next/link";
import { useCart } from "../cart-context";

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, removeOne, removeAll } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#020617_0,#020617_40%,#000_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-10 md:px-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Clothing Store
            </span>
            <span className="text-xs text-slate-500">Checkout</span>
          </div>

          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 hover:text-white"
          >
            Volver al inicio
          </Link>
        </header>

        <main className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
          <section className="glass-panel flex flex-col rounded-3xl p-5 text-sm text-slate-200">
            <div className="flex items-center justify-between">
              <h1 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-300">
                Resumen del pedido
              </h1>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[0.7rem] font-semibold text-emerald-300">
                {totalItems} prenda{totalItems === 1 ? "" : "s"}
              </span>
            </div>

            {!hasItems && (
              <div className="mt-6 text-sm text-slate-400">
                <p>Tu carrito está vacío. Añade prendas desde el catálogo o la página principal.</p>
                <div className="mt-4 flex gap-2 text-xs">
                  <Link
                    href="/catalog"
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 uppercase tracking-[0.18em] text-slate-200 hover:border-white/80"
                  >
                    Ir al catálogo
                  </Link>
                  <Link
                    href="/"
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 uppercase tracking-[0.18em] text-slate-200 hover:border-white/80"
                  >
                    Ver recomendaciones
                  </Link>
                </div>
              </div>
            )}

            {hasItems && (
              <ul className="mt-6 space-y-3 text-sm">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        {item.name}
                      </span>
                      <span className="text-[0.7rem] text-slate-500">
                        Cantidad: {item.quantity}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right text-[0.8rem] text-slate-100">
                        <div>{item.price}</div>
                      </div>
                      <div className="flex items-center gap-1 text-[0.65rem]">
                        <button
                          className="rounded-full border border-slate-700 px-2 py-1 text-slate-300 hover:border-white/80"
                          onClick={() => removeOne(item.id)}
                        >
                          -1
                        </button>
                        <button
                          className="rounded-full border border-rose-500/70 px-2 py-1 text-rose-300 hover:border-rose-400"
                          onClick={() => removeAll(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-[0.22em] text-slate-400">Total</span>
              <span className="text-lg font-semibold text-slate-50">${totalPrice}</span>
            </div>

            <div className="space-y-2 text-[0.75rem] text-slate-400">
              <p>Este es un checkout de prueba. Más adelante conectaremos pago real y direcciones.</p>
              <p>
                Por ahora, úsalo para testear el flujo de añadir prendas desde cualquier parte de la
                app y ver cómo se refleja el total.
              </p>
            </div>

            <button
              disabled={!hasItems}
              className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Confirmar pedido (demo)
            </button>
          </aside>
        </main>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../cart-context";

const products = [
  {
    id: "elegant-01",
    name: "Blazer Noir LXRY",
    type: "Elegante",
    description: "Corte slim, tela italiana, detalles metálicos minimal.",
    eta: "25-35 min",
    price: "$89",
  },
  {
    id: "street-01",
    name: "Hoodie Neon Skyline",
    type: "Callejera",
    description: "Algodón premium, estampado glow-in-the-dark.",
    eta: "20-30 min",
    price: "$59",
  },
  {
    id: "elegant-02",
    name: "Pantalón Tailored Midnight",
    type: "Elegante",
    description: "Silhouette tapered, listo para after-office nocturno.",
    eta: "30-40 min",
    price: "$72",
  },
  {
    id: "street-02",
    name: "Zapatillas StreetPulse X",
    type: "Callejera",
    description: "Suela chunky, líneas futuristas y detalles neón.",
    eta: "35-45 min",
    price: "$110",
  },
];

interface CatalogClientProps {
  category: string;
}

export function CatalogClient({ category }: CatalogClientProps) {
  const { addItem } = useCart();

  const filteredProducts = products.filter((product) => {
    if (category === "elegant") return product.type === "Elegante";
    if (category === "street") return product.type === "Callejera";
    return true; // all
  });

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#020617_0,#020617_40%,#000_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-8 md:px-10 md:py-12">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60">
              <Image
                src="/cs-logo.png"
                alt="Clothing Store logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-[0.25em] text-slate-400">
                CLOTHING STORE
              </span>
              <span className="text-xs text-slate-500">Catálogo nocturno</span>
            </div>
          </div>

          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 hover:text-white"
          >
            Volver al inicio
          </Link>
        </header>

        <main className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Catálogo de prendas
            </h1>
            <p className="max-w-xl text-sm text-slate-400">
              Elige piezas elegantes, callejeras o híbridas. Más adelante conectaremos este
              catálogo a MongoDB para que todo venga desde la base de datos.
            </p>
          </div>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="glass-panel flex flex-col justify-between rounded-3xl p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/70"
              >
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                      {product.type}
                    </span>
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-slate-100 to-slate-500" />
                  </div>
                  <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                    {product.name}
                  </h2>
                  <p className="text-[0.78rem] leading-snug text-slate-400">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-[0.78rem] text-slate-300">
                  <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.7rem] text-emerald-300">
                    {product.eta}
                  </span>
                  <span className="text-xs font-semibold text-slate-100">
                    {product.price}
                  </span>
                </div>

                <div className="mt-4 flex gap-2 text-[0.75rem]">
                  <button
                    className="flex-1 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-2 font-medium text-slate-100 hover:border-white/80"
                    onClick={() =>
                      addItem({ id: product.id, name: product.name, price: product.price })
                    }
                  >
                    Añadir al pedido
                  </button>
                  <Link
                    href={`/catalog/${product.id}`}
                    className="rounded-full border border-slate-500 bg-slate-900/80 px-3 py-2 text-[0.7rem] text-slate-200 hover:border-white/80"
                  >
                    Ver detalle
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-context";
import { useEffect, useState } from "react";

type ProductFromApi = {
  _id?: string;
  id: string;
  name: string;
  type: string;
  description: string;
  eta: string;
  price: string;
};

export default function Home() {
  const { addItem, totalItems, totalPrice } = useCart();
  const [products, setProducts] = useState<ProductFromApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        const data = (await res.json()) as ProductFromApi[];
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#020617_0,#020617_40%,#000_100%)] text-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-3xl bg-[radial-gradient(circle_at_top,rgba(249,250,251,0.18)_0,transparent_60%)]" />

        {/* NAVBAR */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60 shadow-[0_0_22px_rgba(248,250,252,0.35)]">
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
              <span className="text-xs text-slate-500">Elegante • Callejera • Same-night</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <Link
              href="/catalog?category=all"
              className="chip px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-slate-300/90"
            >
              Explorar
            </Link>
            <Link
              href="/catalog?category=elegant"
              className="chip px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-slate-300/90"
            >
              Elegante
            </Link>
            <Link
              href="/catalog?category=street"
              className="chip px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-slate-300/90"
            >
              Callejera
            </Link>
            <button className="rounded-full border border-slate-200/70 bg-slate-50/5 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-[0_0_22px_rgba(249,250,251,0.35)] hover:bg-slate-50/10">
              Track Pedido
            </button>
          </nav>
        </header>

        {/* HERO */}
        <main className="flex flex-1 flex-col gap-10 md:flex-row md:items-stretch">
          <section className="flex flex-1 flex-col justify-center gap-6">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-100 shadow-[0_0_10px_rgba(248,250,252,0.9)]" />
              Delivery activo en tu zona
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Delivery de ropa
              <span className="text-slate-100">
                {" "}
                elegante & callejera
              </span>
              {" "}
              en modo futurista.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Arma tu fit nocturno en minutos. Combina blazers minimalistas con hoodies neón
              y zapatillas chunky. Nosotros lo llevamos hasta tu puerta con tracking en tiempo
              casi real.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/catalog"
                className="glass-panel flex items-center gap-3 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.9)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[0.65rem] font-bold text-slate-950">
                  Go
                </span>
                Explorar catálogo
              </Link>

              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-300 hover:border-slate-200/80"
              >
                Ver outfits curados
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap gap-3 text-[0.7rem] text-slate-400">
              <div className="chip flex items-center gap-2 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-100" />
                Entrega promedio 32 min
              </div>
              <div className="chip flex items-center gap-2 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                Fits premium seleccionados
              </div>
              <div className="chip flex items-center gap-2 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                Elegante • Callejera • Híbrida
              </div>
            </div>
          </section>

          {/* PANEL DERECHA: GRID */}
          <aside className="mt-4 flex flex-1 flex-col gap-4 md:mt-0">
            <div className="glass-panel relative flex flex-1 flex-col overflow-hidden rounded-3xl p-4 shadow-[0_25px_60px_rgba(15,23,42,0.9)]">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.2)_0,transparent_60%)]" />
              <div className="absolute -bottom-32 -left-16 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.2)_0,transparent_60%)]" />

              <div className="relative flex items-center justify-between gap-4 pb-2">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    Mix & Match
                  </h2>
                  <p className="text-sm text-slate-400">Combina elegante + street en un solo pedido.</p>
                </div>
                <div className="chip flex items-center gap-2 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-200">
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-slate-50 to-slate-400" />
                  Noche activa
                </div>
              </div>

              <div className="relative mt-3 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                {loading && (
                  <p className="text-sm text-slate-400">Cargando productos...</p>
                )}
                {error && !loading && (
                  <p className="text-sm text-rose-400">{error}</p>
                )}
                {!loading && !error &&
                  products.map((product) => (
                  <article
                    key={product.id}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-900/60 p-3 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/70"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="inline-flex items-center gap-2">
                          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                            {product.type}
                          </span>
                          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                        </div>
                        <h3 className="text-sm font-semibold text-slate-50">
                          {product.name}
                        </h3>
                        <p className="text-[0.72rem] leading-snug text-slate-400">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-right">
                        <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.65rem] text-slate-100">
                          {product.eta}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-100">
                        {product.price}
                      </span>
                    </div>

                    <button
                      className="mt-3 inline-flex items-center justify-between rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.7rem] font-medium text-slate-200 hover:border-slate-200/80"
                      onClick={() =>
                        addItem({ id: product.id, name: product.name, price: product.price })
                      }
                    >
                      <span>Añadir al pedido</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[0.65rem] font-bold text-slate-950">
                        +
                      </span>
                    </button>
                  </article>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-[0.7rem] text-slate-300">
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-[0.22em] text-slate-400">Resumen express</span>
                <span className="rounded-full bg-slate-100/10 px-2 py-1 text-[0.65rem] font-semibold text-slate-100">
                  {totalItems} prenda{totalItems === 1 ? "" : "s"} • ${totalPrice}
                </span>
              </div>
              <div className="flex items-center justify-between text-[0.7rem] text-slate-400">
                <span>Entrega estimada (centro ciudad)</span>
                <span className="font-medium text-slate-200">22 - 38 minutos</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
              <Link
                href="/checkout"
                className="w-full rounded-full bg-slate-100 py-2 text-center text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_18px_35px_rgba(15,23,42,0.85)]"
              >
                Continuar al checkout
              </Link>
            </div>
          </aside>
        </main>

        {/* FOOTER MINI */}
        <footer className="mt-2 flex flex-wrap items-center justify-between gap-3 text-[0.65rem] text-slate-500">
          <span>© {new Date().getFullYear()} LXRY Delivery. Drop nocturno, ciudad conectada.</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            Built on Next.js • Tailwind
          </span>
        </footer>
      </div>
    </div>
  );
}

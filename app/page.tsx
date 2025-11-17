"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-context";

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

export default function Home() {
  const { addItem, totalItems, totalPrice } = useCart();

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#050816_0,#020617_40%,#000_100%)] text-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-3xl bg-[radial-gradient(circle_at_top,#22d3ee33_0,transparent_60%)]" />

        {/* NAVBAR */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60 shadow-[0_0_25px_rgba(34,211,238,0.45)]">
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
            <button className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.55)] hover:bg-cyan-500/20">
              Track Pedido
            </button>
          </nav>
        </header>

        {/* HERO */}
        <main className="flex flex-1 flex-col gap-10 md:flex-row md:items-stretch">
          <section className="flex flex-1 flex-col justify-center gap-6">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Delivery activo en tu zona
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Delivery de ropa
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
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
                className="glass-panel flex items-center gap-3 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-[0.65rem] font-bold text-slate-950">
                  Go
                </span>
                Explorar catálogo
              </Link>

              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-300 hover:border-cyan-400/80"
              >
                Ver outfits curados
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap gap-3 text-[0.7rem] text-slate-400">
              <div className="chip flex items-center gap-2 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Entrega promedio 32 min
              </div>
              <div className="chip flex items-center gap-2 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Fits premium seleccionados
              </div>
              <div className="chip flex items-center gap-2 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Elegante • Callejera • Híbrida
              </div>
            </div>
          </section>

          {/* PANEL DERECHA: GRID */}
          <aside className="mt-4 flex flex-1 flex-col gap-4 md:mt-0">
            <div className="glass-panel relative flex flex-1 flex-col overflow-hidden rounded-3xl p-4 shadow-[0_25px_80px_rgba(15,23,42,0.9)]">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,#22d3ee55_0,transparent_60%)]" />
              <div className="absolute -bottom-32 -left-16 h-60 w-60 rounded-full bg-[radial-gradient(circle,#a855f755_0,transparent_60%)]" />

              <div className="relative flex items-center justify-between gap-4 pb-2">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    Mix & Match
                  </h2>
                  <p className="text-sm text-slate-400">Combina elegante + street en un solo pedido.</p>
                </div>
                <div className="chip flex items-center gap-2 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-200">
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                  Noche activa
                </div>
              </div>

              <div className="relative mt-3 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                {products.map((product) => (
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
                        <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.65rem] text-emerald-300">
                          {product.eta}
                        </span>
                        <span className="text-xs font-semibold text-cyan-200">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    <button
                      className="mt-3 inline-flex items-center justify-between rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.7rem] font-medium text-slate-200 hover:border-cyan-400/80"
                      onClick={() =>
                        addItem({ id: product.id, name: product.name, price: product.price })
                      }
                    >
                      <span>Añadir al pedido</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-[0.65rem] font-bold text-slate-950">
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
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[0.65rem] font-semibold text-emerald-300">
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
                className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 py-2 text-center text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,0.55)]"
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

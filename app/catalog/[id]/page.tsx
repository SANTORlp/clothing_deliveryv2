"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../cart-context";
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

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addItem } = useCart();
  const [product, setProduct] = useState<ProductFromApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/products/${params.id}`);
        if (res.status === 404) {
          setProduct(null);
          setError("Producto no encontrado");
          return;
        }
        if (!res.ok) {
          throw new Error("No se pudo cargar el producto");
        }
        const data = (await res.json()) as ProductFromApi;
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar producto");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#020617_0,#020617_40%,#000_100%)] text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-10 md:px-10">
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
                <span className="text-xs text-slate-500">Detalle de producto</span>
              </div>
            </div>

            <Link
              href="/catalog"
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 hover:text-white"
            >
              Volver al catálogo
            </Link>
          </header>

          <main className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="text-sm text-slate-400">Cargando producto...</p>
          </main>
        </div>
      </div>
    );
  }

  if (!loading && (!product || error)) {
    return (
      <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#020617_0,#020617_40%,#000_100%)] text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-10 md:px-10">
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
                <span className="text-xs text-slate-500">Detalle de producto</span>
              </div>
            </div>

            <Link
              href="/catalog"
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 hover:text-white"
            >
              Volver al catálogo
            </Link>
          </header>

          <main className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="text-sm text-slate-400">
              {error === "Producto no encontrado"
                ? "Producto no encontrado. Puede que haya sido removido del catálogo."
                : "Error al cargar el producto. Intenta nuevamente más tarde."}
            </p>
            <Link
              href="/catalog"
              className="mt-4 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-200 hover:border-white/80"
            >
              Volver al catálogo
            </Link>
          </main>
        </div>
      </div>
    );
  }

  // En este punto loading es false, no hay error y product no es null
  if (!product) {
    return null;
  }

  const p = product as ProductFromApi;

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#020617_0,#020617_40%,#000_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-10 md:px-10">
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
              <span className="text-xs text-slate-500">Detalle de producto</span>
            </div>
          </div>

          <Link
            href="/catalog"
            className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 hover:text-white"
          >
            Volver al catálogo
          </Link>
        </header>

        <main className="flex flex-1 flex-col gap-8 md:flex-row">
          <section className="flex-1">
            <div className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    {p.type}
                  </span>
                  <span className="h-1 w-10 rounded-full bg-gradient-to-r from-slate-100 to-slate-500" />
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  {p.name}
                </h1>
                <p className="text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Entrega estimada
                  </span>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.75rem] text-emerald-300">
                    {p.eta}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Precio
                  </span>
                  <span className="text-lg font-semibold text-slate-50">
                    {p.price}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 text-[0.75rem] text-slate-300">
                <p>
                  Más adelante conectaremos esta vista con MongoDB para mostrar fotos, talles,
                  colores y stock en tiempo real.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100 hover:border-white/80"
                    onClick={() =>
                      addItem({ id: p.id, name: p.name, price: p.price })
                    }
                  >
                    Añadir al pedido
                  </button>
                  <Link
                    href="/checkout"
                    className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:bg-white"
                  >
                    Ir al checkout
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <aside className="flex-1 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-[0.8rem] text-slate-300">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Info de la prenda
            </h2>
            <p className="mt-3 text-slate-400">
              Aquí podrás mostrar detalles como composición de la tela, recomendaciones de uso,
              combinaciones sugeridas (elegante, callejera o híbrida) y notas de cuidado.
            </p>
            <p className="mt-3 text-slate-400">
              Cuando conectemos la base de datos, esta sección se llenará en automático con datos
              reales del producto.
            </p>
          </aside>
        </main>
      </div>
    </div>
  );
}

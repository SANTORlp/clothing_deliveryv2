import { CatalogClient } from "./CatalogClient";

interface CatalogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const category = params.category ?? "all";

  return <CatalogClient category={category} />;
}

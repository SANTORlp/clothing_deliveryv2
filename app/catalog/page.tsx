import { CatalogClient } from "./CatalogClient";

interface CatalogPageProps {
  searchParams: { category?: string };
}

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const category = searchParams.category ?? "all";

  return <CatalogClient category={category} />;
}

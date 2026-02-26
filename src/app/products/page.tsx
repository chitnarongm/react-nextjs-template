import MainLayout from "@/components/layout/MainLayout";
import { ProductList } from "@/features/products/components/ProductList";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
  const t = useTranslations("Products");

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
      </div>
      <ProductList />
    </MainLayout>
  );
}

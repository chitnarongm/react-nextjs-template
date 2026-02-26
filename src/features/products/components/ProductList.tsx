"use client";

import { useGetProducts } from "@/features/products/hooks/useGetProducts";
import { useTranslations } from "next-intl";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const t = useTranslations("Products");
  const { data: products, isLoading, isError, error } = useGetProducts();

  if (isLoading) {
    return (
      <div
        data-testid="product-list-loading"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="skeleton h-80 w-full"
            data-testid="loading-skeleton"
          ></div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div data-testid="product-list-error" className="alert alert-error">
        <span>
          {t("error")}: {(error as Error).message}
        </span>
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div
        data-testid="product-list-empty"
        className="text-center p-12 opacity-50"
      >
        {t("noData")}
      </div>
    );
  }

  return (
    <div
      role="list"
      data-testid="product-list"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <div role="listitem" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

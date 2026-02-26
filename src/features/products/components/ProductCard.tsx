import { Button } from "@/components/ui/Button";
import { Product } from "@/features/products/types";
import { useTranslations } from "next-intl";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations("Products");

  return (
    <div
      data-testid="product-card"
      className="card bg-base-100 shadow-xl border border-base-200 h-full hover:shadow-2xl transition-all"
    >
      <figure className="aspect-square p-6 bg-base-200">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain mix-blend-multiply"
        />
      </figure>
      <div className="card-body p-6 flex flex-col justify-between">
        <div>
          <div className="badge badge-secondary badge-outline mb-2 text-[10px] font-bold uppercase tracking-widest">
            {product.category}
          </div>
          <h3
            data-testid="product-title"
            className="card-title text-base leading-tight line-clamp-2 min-h-[3rem]"
            title={product.title}
          >
            {product.title}
          </h3>
        </div>
        <div className="card-actions justify-between items-center mt-6">
          <span
            data-testid="product-price"
            className="text-2xl font-black text-primary"
          >
            ${product.price.toFixed(2)}
          </span>
          <Button
            data-testid="add-to-cart-button"
            size="sm"
            variant="primary"
            className="btn-square w-auto px-4"
          >
            {t("addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
};

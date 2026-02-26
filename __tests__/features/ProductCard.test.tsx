import { ProductCard } from "@/features/products/components/ProductCard";
import { Product } from "@/features/products/types";
import { render, screen } from "@testing-library/react";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "Test Description",
  category: "Test Category",
  image: "https://test.com/image.jpg",
  rating: {
    rate: 4.5,
    count: 10,
  },
};

describe("ProductCard Component", () => {
  it("should match snapshot", () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    expect(container).toMatchSnapshot();
  });

  it("should display product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Test Product");

    
    expect(screen.getByTestId("product-title")).toHaveTextContent(
      "Test Product",
    );
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByTestId("product-price")).toHaveTextContent("$99.99");

    
    expect(screen.getByTestId("add-to-cart-button")).toBeInTheDocument();
  });
});

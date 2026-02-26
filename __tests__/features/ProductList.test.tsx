import { ProductList } from "@/features/products/components/ProductList";
import { useGetProducts } from "@/features/products/hooks/useGetProducts";
import { Product } from "@/features/products/types";
import { render, screen } from "@testing-library/react";

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Desc 1",
    category: "Category 1",
    image: "img1.jpg",
    rating: { rate: 4, count: 10 },
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description: "Desc 2",
    category: "Category 2",
    image: "img2.jpg",
    rating: { rate: 5, count: 20 },
  },
];


jest.mock("@/features/products/hooks/useGetProducts", () => ({
  useGetProducts: jest.fn(),
}));

const mockUseGetProducts = useGetProducts as jest.Mock;

describe("ProductList Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot when rendering products", () => {
    mockUseGetProducts.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: true,
      refetch: jest.fn(),
    });

    const { container } = render(<ProductList />);
    expect(container).toMatchSnapshot();
  });

  it("should display loading skeleton correctly", () => {
    mockUseGetProducts.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
      isSuccess: false,
      refetch: jest.fn(),
    });

    render(<ProductList />);
    
    expect(screen.getByTestId("product-list-loading")).toBeInTheDocument();
  });

  it("should display error message correctly", () => {
    mockUseGetProducts.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: new Error("Network Issue"),
      isSuccess: false,
      refetch: jest.fn(),
    });

    render(<ProductList />);
    expect(screen.getByTestId("product-list-error")).toHaveTextContent(
      "error: Network Issue",
    );
  });

  it("should render the list of products successfully", () => {
    mockUseGetProducts.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: true,
      refetch: jest.fn(),
    });

    render(<ProductList />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockProducts.length);
    expect(items[0]).toHaveTextContent("Product 1");
    expect(items[1]).toHaveTextContent("Product 2");
  });
});

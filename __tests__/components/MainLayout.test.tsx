import MainLayout from "@/components/layout/MainLayout";
import { useAppStore } from "@/stores/useAppStore";
import { render, screen } from "@testing-library/react";

describe("MainLayout Component", () => {
  beforeEach(() => {
    useAppStore.setState({ sidebarOpen: true, locale: "en" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <MainLayout>
        <div>Test Children</div>
      </MainLayout>,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render children properly and display translations", () => {
    render(
      <MainLayout>
        <div data-testid="layout-children">Test Content</div>
      </MainLayout>,
    );

    
    expect(screen.getByTestId("layout-children")).toBeInTheDocument();

    
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("should handle sidebar state via Zustand store", () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>,
    );

    
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("w-64");
  });
});

import { Navbar } from "@/components/layout/Navbar";
import { useAppStore } from "@/stores/useAppStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";

describe("Navbar Component", () => {
  beforeEach(() => {
    useAppStore.setState({ sidebarOpen: true, locale: "en" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render application branding", () => {
    render(<Navbar />);
    expect(screen.getByTestId("app-name")).toHaveTextContent("appName");
  });

  it("should handle language switching", () => {
    render(<Navbar />);
    const toggle = screen.getByTestId("language-toggle");
    fireEvent.click(toggle);
    expect(useAppStore.getState().locale).toBe("th");
  });

  it("should display user name when authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Jane Doe" } },
      status: "authenticated",
    });

    render(<Navbar />);
    expect(screen.getByTestId("user-name")).toHaveTextContent("Jane Doe");
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
  });

  it("should display welcome message when unauthenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<Navbar />);
    expect(screen.getByText("welcome")).toBeInTheDocument();
  });
});

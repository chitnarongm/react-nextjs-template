import LoginPage from "@/app/login/page";
import { render, screen } from "@testing-library/react";


jest.mock("@/features/authentication/components/LoginForm", () => ({
  LoginForm: () => <div data-testid="mock-login-form">Mocked Login Form</div>,
}));

describe("LoginPage", () => {
  it("should match snapshot", () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });

  it("should display translated strings properly via mock", () => {
    render(<LoginPage />);

    
    expect(screen.getByTestId("login-page-hint")).toBeInTheDocument();
    expect(screen.getByTestId("login-page-title")).toBeInTheDocument();
    expect(screen.getByTestId("login-page-subtitle")).toBeInTheDocument();

    
    expect(screen.getByTestId("mock-login-form")).toBeInTheDocument();
  });
});

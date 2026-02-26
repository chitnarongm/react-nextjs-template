import { LoginForm } from "@/features/authentication/components/LoginForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { signIn } from "next-auth/react";

const mockPush = jest.fn();
const mockRefresh = jest.fn();


jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    refresh: mockRefresh,
  }),
}));


jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
  useSession: jest.fn(() => ({ data: null, status: "unauthenticated" })),
}));

describe("LoginForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });

  it("should display translated strings properly via mock", () => {
    render(<LoginForm />);
    
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByTestId("username-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("login-submit-button")).toBeInTheDocument();
  });

  it("should handle successful login", async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({ error: null });

    render(<LoginForm />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password" },
    });

    const submitButton = screen.getByTestId("login-submit-button");
    fireEvent.click(submitButton);

    expect(signIn).toHaveBeenCalledWith("credentials", {
      username: "admin",
      password: "password",
      redirect: false,
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/products");
    });
    expect(mockRefresh).toHaveBeenCalled();
  });

  it("should handle invalid credentials", async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({ error: "CredentialsSignin" });

    render(<LoginForm />);

    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "wrongadmin" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "wrongpassword" },
    });

    const submitButton = screen.getByTestId("login-submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("login-error")).toHaveTextContent(
        "invalidCredentials",
      );
    });
    expect(mockPush).not.toHaveBeenCalled();
  });
});

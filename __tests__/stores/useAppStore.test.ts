import { useAppStore } from "@/stores/useAppStore";

describe("useAppStore (Zustand)", () => {
  beforeEach(() => {
    
    useAppStore.setState({ sidebarOpen: true, locale: "en" });
  });

  it("should initialize with default values", () => {
    const state = useAppStore.getState();
    expect(state.sidebarOpen).toBe(true);
    expect(state.locale).toBe("en");
  });

  it("should toggle sidebar correctly", () => {
    const { toggleSidebar } = useAppStore.getState();

    toggleSidebar();
    expect(useAppStore.getState().sidebarOpen).toBe(false);

    toggleSidebar();
    expect(useAppStore.getState().sidebarOpen).toBe(true);
  });

  it("should set locale correctly", () => {
    const { setLocale } = useAppStore.getState();

    setLocale("th");
    expect(useAppStore.getState().locale).toBe("th");
  });
});

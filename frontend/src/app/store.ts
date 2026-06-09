import { create } from 'zustand';

export interface UserProfile {
  id: string;
  email: string;
  roles: string[];
  name: string;
}

export type AppView = 'erp-access' | 'erp-modules' | 'erp-home' | 'ats' | 'purchase';
export type ActiveTab =
  | 'dashboard'
  | 'requisitions'
  | 'jobs'
  | 'candidates'
  | 'interviews'
  | 'analytics'
  | 'referrals'
  | 'settings';

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  user: UserProfile | null;
  isLoading: boolean;
};

type UIState = {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  appView: AppView;
  activeTab: ActiveTab;
};

type StoreState = AuthState &
  UIState & {
    setLoginSuccess: (payload: { token: string; user?: UserProfile }) => void;
    setUser: (user: UserProfile | null) => void;
    setLogout: () => void;
    setLoading: (isLoading: boolean) => void;
    toggleTheme: () => void;
    setTheme: (theme: 'light' | 'dark') => void;
    setSidebarOpen: (sidebarOpen: boolean) => void;
    setAppView: (appView: AppView) => void;
    setActiveTab: (activeTab: ActiveTab) => void;
  };

let initialToken: string | null = null;
try {
  initialToken = localStorage.getItem('access_token');
} catch {}

let initialTheme: 'light' | 'dark' = 'dark';
try {
  initialTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
} catch {}

export const useAppStore = create<StoreState>((set) => ({
  token: initialToken,
  isAuthenticated: !!initialToken,
  user: null,
  isLoading: false,
  theme: initialTheme,
  sidebarOpen: true,
  appView: 'erp-access',
  activeTab: 'dashboard',
  setLoginSuccess: (payload) =>
    set((state) => {
      localStorage.setItem('access_token', payload.token);
      return {
        token: payload.token,
        isAuthenticated: true,
        user: payload.user ?? state.user,
      };
    }),
  setUser: (user) =>
    set(() => ({
      user,
      isAuthenticated: !!user,
    })),
  setLogout: () =>
    set(() => {
      localStorage.removeItem('access_token');
      return {
        token: null,
        isAuthenticated: false,
        user: null,
      };
    }),
  setLoading: (isLoading) => set({ isLoading }),
  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
      return { theme: nextTheme };
    }),
  setTheme: (theme) =>
    set(() => {
      localStorage.setItem('theme', theme);
      return { theme };
    }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setAppView: (appView) => set({ appView }),
  setActiveTab: (activeTab) => set({ activeTab }),
}));

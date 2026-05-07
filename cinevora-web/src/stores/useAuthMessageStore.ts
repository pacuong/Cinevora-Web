import { create } from 'zustand';

type AuthMessageType = 'success' | 'error' | null;

interface AuthMessageState {
  type: AuthMessageType;
  message: string;
  setSuccess: (msg: string) => void;
  setError: (msg: string) => void;
  clear: () => void;
}

export const useAuthMessageStore = create<AuthMessageState>((set) => ({
  type: null,
  message: '',
  setSuccess: (msg) => set({ type: 'success', message: msg }),
  setError: (msg) => set({ type: 'error', message: msg }),
  clear: () => set({ type: null, message: '' }),
}));
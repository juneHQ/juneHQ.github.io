import { create } from 'zustand';

export type SDK = 'Browser' | 'React' | 'NodeJS' | 'Python' | 'Ruby' | 'HTTP';

export const useSdkStore = create<{
  sdk: SDK;
  setSdk: (sdk: SDK) => void;
}>((set) => ({
  sdk: 'Browser',
  setSdk: (sdk) => set({ sdk }),
}));

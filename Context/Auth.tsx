import { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({
  currentApp: null,
  setCurrentApp: () => {},
});

export default function AuthProvider({ children }) {
  const [currentApp, setCurrentApp] = useState(null);
  const value = useMemo(() => ({ currentApp, setCurrentApp }), [currentApp]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

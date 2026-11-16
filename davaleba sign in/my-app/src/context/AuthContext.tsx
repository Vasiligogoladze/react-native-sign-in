import React, { createContext, useContext, useState } from 'react';

export type User = {
  username: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (username: string, password: string) => boolean;
  signOut: () => void;
};

// Mockup მომხმარებელი (სერვერის ნაცვლად)
const MOCK_USER = {
  username: 'admin',
  password: '1234',
  name: 'ნიკა',
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => false,
  signOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // null = არ არის შესული
  const [user, setUser] = useState<User | null>(null);

  const signIn = (username: string, password: string): boolean => {
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setUser({ username: MOCK_USER.username, name: MOCK_USER.name });
      return true;
    }
    return false;
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// მარტივი hook, რომ ნებისმიერ ეკრანზე გამოვიყენოთ
export function useAuth() {
  return useContext(AuthContext);
}

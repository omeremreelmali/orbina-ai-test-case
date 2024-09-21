"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/constants/Routes";
import { useApiKey } from "@/hooks/useApiKey";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (apiKey: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { apiKey, saveApiKey } = useApiKey();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (apiKey) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [apiKey]);

  useEffect(() => {
    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
      router.push(Routes.HOME);
    } else if (isAuthenticated && pathname === Routes.HOME) {
      router.push(Routes.DASHBOARD);
    }
  }, [isAuthenticated, pathname]);

  const login = (newApiKey: string) => {
    saveApiKey(newApiKey);
    setIsAuthenticated(true);
    router.push(Routes.DASHBOARD);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const publicRoutes = [Routes.HOME];

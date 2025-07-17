// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;

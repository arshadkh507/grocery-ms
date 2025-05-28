import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex bg-lime-50 min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;

import React from "react";

interface LoginContainerProps {
  children: React.ReactNode;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-275 w-full bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row min-h-150">
        {children}
      </div>
    </div>
  );
};

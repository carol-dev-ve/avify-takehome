import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">UK Energy Mix</h1>
      </header>

      <main className="flex-grow p-4">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">My Footer YC</p>
      </footer>
    </div>
  );
};

export default Layout;
import { Outlet } from "react-router-dom";
import { Keyboard } from "lucide-react";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-100">
      <header className="flex items-center space-x-2 mb-4">
        <Keyboard className="h-6 w-6" />
        <h1 className="text-2xl font-bold">タイピング練習アプリ</h1>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;
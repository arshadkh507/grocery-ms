/* eslint-disable @typescript-eslint/no-unused-vars */
// components/layout/Layout.tsx
"use client";
import { ReactNode, useState } from "react";
import { Menu, Home, ShoppingCart, Users, Settings } from "lucide-react";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Type definitions
interface NavigationItem {
  name: string;
  path: string;
  icon: IconType;
}

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Navigation items with Lucide icons
  const navigation: NavigationItem[] = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Sales", path: "/sales", icon: ShoppingCart },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <header className="bg-white shadow-sm z-10">
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo/Title */}
            <div className="flex-1 flex items-center justify-center md:justify-start">
              <h1 className="text-xl font-semibold text-gray-800">
                POS Management System
              </h1>
            </div>

            {/* User Profile/Notifications (placeholder) */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Settings className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar (Desktop) */}
        <aside
          className={`hidden md:block bg-gray-800 w-64 transform transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <nav className="mt-4 space-y-1">
              {navigation.map((item) => (
                <Link href={item.path} key={item.name}>
                  <span
                    className={`flex items-center px-4 py-3  rounded-lg   ${
                      pathname === item.path
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};


import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp, Wallet, User, Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/exchange", label: "Exchange", icon: TrendingUp },
    { path: "/wallet", label: "Wallet", icon: Wallet },
    { path: "/profile", label: "Account", icon: User },
  ];

  return (
    <header className="border-b border-white/10 backdrop-blur-sm bg-slate-900/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
            </div>
            <span className="text-2xl font-bold text-white">PIEMPORIUM</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label }) => (
              <Link key={path} to={path}>
                <Button
                  variant={location.pathname === path ? "default" : "ghost"}
                  className={location.pathname === path 
                    ? "bg-blue-600 text-white" 
                    : "text-blue-200 hover:text-white hover:bg-white/10"
                  }
                >
                  {label}
                </Button>
              </Link>
            ))}
            <Link to="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 ml-4">
                Log out
              </Button>
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-white/10">
        <nav className="flex justify-around py-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link key={path} to={path} className="flex-1">
              <Button
                variant="ghost"
                className={`w-full flex flex-col items-center py-3 space-y-1 ${
                  location.pathname === path
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-blue-200 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{label}</span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

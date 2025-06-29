
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo credentials
    if (email === "demo@piemporium.com" && password === "demo123") {
      toast({
        title: "Login Successful",
        description: "Welcome to EMPORIUM!",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Use demo@piemporium.com / demo123 for demo access",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-lg p-3 shadow-2xl border border-orange-400/30">
              <span className="text-white font-bold text-3xl drop-shadow-lg block leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent tracking-wide" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>EMPORIUM</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-blue-300">Login</span>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                REGISTER
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md bg-slate-800/30 border-slate-700/50 backdrop-blur-md shadow-2xl animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
          <p className="text-blue-200">Sign in to your account</p>
          <div className="mt-4 p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <p className="text-blue-200 text-sm font-medium">Demo Credentials:</p>
            <p className="text-white text-sm">Email: demo@piemporium.com</p>
            <p className="text-white text-sm">Password: demo123</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Username or E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                placeholder="demo@piemporium.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password *</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 pr-10 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="demo123"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-blue-200 text-sm">Keep me signed in</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Login
              </Button>
              <Link to="/register">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full bg-slate-700/50 border-slate-600/50 text-white hover:bg-slate-600/50 hover:border-slate-500/50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <Button variant="link" className="text-blue-300 hover:text-blue-200">
                Forgot your password?
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <footer className="absolute bottom-0 left-0 right-0 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span className="text-blue-300">Trade Fee 0.1%</span>
          <span className="text-blue-300">Copyright© - EMPORIUM</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;

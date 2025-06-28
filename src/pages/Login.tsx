
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
        description: "Welcome to Piemporium!",
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
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
            </div>
            <span className="text-2xl font-bold text-white">PIEMPORIUM</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-blue-300">Login</span>
            <Link to="/register">
              <Button className="bg-white text-slate-900 hover:bg-gray-100">
                REGISTER
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md bg-white/10 border-white/20 backdrop-blur-md">
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
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10"
                  placeholder="demo123"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
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
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                Login
              </Button>
              <Link to="/register">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white/10"
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
          <span className="text-blue-300">Copyright© - Piemporium</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;

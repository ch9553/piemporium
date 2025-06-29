
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (formData.username && formData.password) {
      toast({
        title: "Registration Successful",
        description: "Welcome to Piemporium!",
      });
      navigate("/dashboard");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl drop-shadow-lg" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>PIEMPORIUM</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10 font-semibold transition-all duration-300">
                Login
              </Button>
            </Link>
            <span className="text-orange-300 font-semibold">REGISTER</span>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md bg-white/10 border-white/20 backdrop-blur-md shadow-2xl animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Join Piemporium</CardTitle>
          <p className="text-blue-200">Create your trading account</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">Username *</Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">E-mail Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password *</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  placeholder="Confirm Password"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                type="submit"
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Register
              </Button>
              <Link to="/login">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
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

export default Register;

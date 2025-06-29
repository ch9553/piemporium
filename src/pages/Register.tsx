
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            <Link to="/login">
              <Button variant="ghost" className="text-blue-300 hover:text-white">
                LOGIN
              </Button>
            </Link>
            <span className="text-orange-400">Register</span>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-md bg-slate-800/30 border-slate-700/50 backdrop-blur-md shadow-2xl animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Create Account</CardTitle>
          <p className="text-blue-200">Join the future of Pi trading</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email Address *</Label>
            <Input
              id="email"
              type="email"
              className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">Username *</Label>
            <Input
              id="username"
              type="text"
              className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password *</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 pr-10 focus:ring-2 focus:ring-orange-400"
                placeholder="Create a strong password"
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white">Confirm Password *</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 pr-10 focus:ring-2 focus:ring-orange-400"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="text-blue-200 text-sm leading-relaxed">
              I agree to the <span className="text-orange-400 underline cursor-pointer">Terms of Service</span> and <span className="text-orange-400 underline cursor-pointer">Privacy Policy</span>
            </Label>
          </div>

          <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-6">
            Create Account
          </Button>

          <div className="text-center">
            <p className="text-blue-200 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-400 hover:text-orange-300 underline">
                Sign in here
              </Link>
            </p>
          </div>
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

export default Register;

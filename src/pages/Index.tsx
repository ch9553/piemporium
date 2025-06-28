
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Wallet, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
            </div>
            <span className="text-2xl font-bold text-white">PIEMPORIUM</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-white text-slate-900 hover:bg-gray-100">
                REGISTER
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            USD/Pi <span className="text-blue-400">Exchange</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Execute instant P2P trades with our live orderbook market. No KYC required.
          </p>
          
          {/* PayPal to Pi Visual */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-blue-600 font-bold text-lg">PayPal</span>
            </div>
            <div className="flex space-x-2">
              <ArrowRight className="w-8 h-8 text-blue-400" />
              <ArrowRight className="w-8 h-8 text-blue-300" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-3xl" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
            </div>
          </div>

          <p className="text-lg text-blue-300 mb-8">
            Secure wallet with instant USD deposits & fast withdrawal to your Pi Network wallet or PayPal Account.
          </p>

          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg">
              Start Trading Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Secure Trading</h3>
              <p className="text-blue-200">End-to-end encryption and secure wallet infrastructure</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Wallet className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Instant Deposits</h3>
              <p className="text-blue-200">Fast USD deposits and Pi Network withdrawals</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Live Market</h3>
              <p className="text-blue-200">Real-time orderbook with competitive rates</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-blue-300">Trade Fee 0.1%</p>
          <p className="text-blue-300">Copyright© - Piemporium</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

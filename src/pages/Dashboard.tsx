
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Dashboard = () => {
  const recentTrades = [
    { time: "23:07:14", price: "$0.5000", amount: "10.0000", type: "buy" },
    { time: "23:07:13", price: "$0.5000", amount: "11.6243", type: "sell" },
    { time: "23:06:36", price: "$0.5000", amount: "1.0000", type: "buy" },
    { time: "23:06:15", price: "$0.5500", amount: "1.0000", type: "sell" },
    { time: "23:01:48", price: "$0.5900", amount: "2.0000", type: "buy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Demo</h1>
          <p className="text-blue-200">Your trading dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">USD Balance</p>
                  <p className="text-2xl font-bold text-white">$5,000.00</p>
                </div>
                <Wallet className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Pi Balance</p>
                  <p className="text-2xl font-bold text-white">5000.0000</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">π</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Current Price</p>
                  <p className="text-2xl font-bold text-green-400">$0.5000</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">24h Volume</p>
                  <p className="text-2xl font-bold text-white">52.6243 π</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Quick Trade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Buy Pi
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  <ArrowDownRight className="w-4 h-4 mr-2" />
                  Sell Pi
                </Button>
              </div>
              <div className="text-center">
                <p className="text-blue-200 text-sm">Current Rate: $0.5000 per π</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Portfolio Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Total Portfolio Value</span>
                  <span className="text-2xl font-bold text-white">$7,500.00</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">USD: 67%</span>
                  <span className="text-blue-400">Pi: 33%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Recent Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      trade.type === 'buy' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      {trade.type === 'buy' ? 
                        <ArrowUpRight className="w-4 h-4 text-green-400" /> : 
                        <ArrowDownRight className="w-4 h-4 text-red-400" />
                      }
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {trade.type === 'buy' ? 'Bought' : 'Sold'} {trade.amount} π
                      </p>
                      <p className="text-blue-200 text-sm">{trade.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{trade.price}</p>
                    <p className={`text-sm ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                      {trade.type === 'buy' ? '+' : '-'}{trade.amount} π
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownRight, Activity, DollarSign, PieChart, BarChart3 } from "lucide-react";

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
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            Welcome to Your Trading Hub
          </h1>
          <p className="text-blue-200 text-lg">Monitor your portfolio and execute trades with confidence</p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/20 border-green-400/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-200 text-sm font-medium">USD Balance</p>
                  <p className="text-3xl font-bold text-white">$5,000.00</p>
                  <p className="text-green-400 text-xs">+2.4% from last week</p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-full">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 border-orange-400/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-200 text-sm font-medium">Pi Balance</p>
                  <p className="text-3xl font-bold text-white">5,000.0000</p>
                  <p className="text-orange-400 text-xs">Available for trading</p>
                </div>
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">π</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-blue-400/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium">Current Price</p>
                  <p className="text-3xl font-bold text-green-400">$0.5000</p>
                  <p className="text-green-400 text-xs">+0.02% (24h)</p>
                </div>
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 border-purple-400/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Portfolio Value</p>
                  <p className="text-3xl font-bold text-white">$7,500.00</p>
                  <p className="text-purple-400 text-xs">Total worth</p>
                </div>
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <PieChart className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Quick Actions and Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2 bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-white flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Quick Trade Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Buy Pi
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg">
                      <ArrowDownRight className="w-4 h-4 mr-2" />
                      Sell Pi
                    </Button>
                  </div>
                  <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                    <p className="text-blue-200 text-sm">Current Rate</p>
                    <p className="text-2xl font-bold text-white">$0.5000 per π</p>
                  </div>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Market Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">24h Volume:</span>
                      <span className="text-white">52.62 π</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">24h High:</span>
                      <span className="text-green-400">$0.5500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">24h Low:</span>
                      <span className="text-red-400">$0.4900</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Portfolio Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-blue-200 text-sm">Total Portfolio Value</p>
                  <p className="text-3xl font-bold text-white">$7,500.00</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-green-400">USD Holdings</span>
                      <span className="text-white">67%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-orange-400">Pi Holdings</span>
                      <span className="text-white">33%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full" style={{width: '33%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Recent Activity */}
        <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Trading Activity
              </div>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-4 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                      trade.type === 'buy' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'
                    }`}>
                      {trade.type === 'buy' ? 
                        <ArrowUpRight className="w-5 h-5 text-white" /> : 
                        <ArrowDownRight className="w-5 h-5 text-white" />
                      }
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        {trade.type === 'buy' ? 'Bought' : 'Sold'} {trade.amount} π
                      </p>
                      <p className="text-blue-200 text-sm">{trade.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold text-lg">{trade.price}</p>
                    <p className={`text-sm font-medium ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
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

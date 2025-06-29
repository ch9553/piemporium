
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { TrendingUp, TrendingDown, BarChart3, Activity, DollarSign, Zap, Target } from "lucide-react";

const Exchange = () => {
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

  const marketStats = {
    lastPrice: "$0.5000",
    change24h: "+0.02%",
    low24h: "$0.4900",
    high24h: "$0.5500",
    volume24h: "52.6243 Pi",
    totalPi: "872.9932 Pi"
  };

  const recentTrades = [
    { time: "23:07:14", price: "$0.5000", amount: "10.0000", type: "buy" },
    { time: "23:07:13", price: "$0.5000", amount: "11.6243", type: "sell" },
    { time: "23:06:36", price: "$0.5000", amount: "1.0000", type: "buy" },
    { time: "23:06:15", price: "$0.5500", amount: "1.0000", type: "sell" },
    { time: "23:01:48", price: "$0.5900", amount: "2.0000", type: "buy" },
    { time: "23:01:36", price: "$0.5500", amount: "8.0000", type: "sell" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Market Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">π</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">USD/PI</h1>
                  <p className="text-blue-200">Professional Trading Exchange</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-green-400">{marketStats.lastPrice}</p>
              <p className="text-green-400 text-sm">{marketStats.change24h}</p>
            </div>
          </div>
          
          {/* Enhanced Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/20 border-green-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-5 h-5 text-green-400 mr-1" />
                  <p className="text-green-200 text-sm font-medium">Last Price</p>
                </div>
                <p className="text-xl font-bold text-green-400">{marketStats.lastPrice}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-500/10 to-red-600/20 border-red-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-red-200 text-sm font-medium mb-2">24h Low</p>
                <p className="text-lg font-bold text-red-400">{marketStats.low24h}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/20 border-green-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-green-200 text-sm font-medium mb-2">24h High</p>
                <p className="text-lg font-bold text-green-400">{marketStats.high24h}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-blue-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Activity className="w-4 h-4 text-blue-400 mr-1" />
                  <p className="text-blue-200 text-sm font-medium">24h Volume</p>
                </div>
                <p className="text-lg font-bold text-blue-400">{marketStats.volume24h}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 border-purple-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-purple-200 text-sm font-medium mb-2">Total Pi</p>
                <p className="text-lg font-bold text-purple-400">{marketStats.totalPi}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 border-orange-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-8 h-8 text-orange-400 mx-auto mb-1" />
                <p className="text-orange-200 text-xs font-medium">Advanced Chart</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Trading Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Instant Trading
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="buy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/10 mb-6">
                    <TabsTrigger value="buy" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white">
                      Buy Pi
                    </TabsTrigger>
                    <TabsTrigger value="sell" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white">
                      Sell Pi
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="buy" className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-white font-medium">Amount (USD)</Label>
                      <Input
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Enter USD amount"
                        className="bg-white/10 border-white/20 text-white text-lg h-12 focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-400/20">
                      <div className="flex justify-between items-center">
                        <span className="text-green-200">You will receive:</span>
                        <span className="text-2xl font-bold text-green-400">
                          {buyAmount ? (parseFloat(buyAmount || "0") / 0.5).toFixed(4) : "0"} π
                        </span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 text-lg font-semibold shadow-lg">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Buy Pi Now
                    </Button>
                    <div className="text-center">
                      <p className="text-green-300 text-sm font-medium">Available: $5,000.00 USD</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sell" className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-white font-medium">Amount (Pi)</Label>
                      <Input
                        value={sellAmount}
                        onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="Enter Pi amount"
                        className="bg-white/10 border-white/20 text-white text-lg h-12 focus:ring-2 focus:ring-red-400"
                      />
                    </div>
                    <div className="bg-red-500/10 p-4 rounded-lg border border-red-400/20">
                      <div className="flex justify-between items-center">
                        <span className="text-red-200">You will receive:</span>
                        <span className="text-2xl font-bold text-red-400">
                          ${sellAmount ? (parseFloat(sellAmount || "0") * 0.5).toFixed(2) : "0.00"} USD
                        </span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white h-12 text-lg font-semibold shadow-lg">
                      <TrendingDown className="w-5 h-5 mr-2" />
                      Sell Pi Now
                    </Button>
                    <div className="text-center">
                      <p className="text-red-300 text-sm font-medium">Available: 5,000.0000 π</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Enhanced Balance Summary */}
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-white text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Account Balances
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-green-200 font-medium">USD Balance</span>
                  </div>
                  <span className="text-white font-bold text-xl">$5,000.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-500/10 rounded-lg border border-orange-400/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">π</span>
                    </div>
                    <span className="text-orange-200 font-medium">Pi Balance</span>
                  </div>
                  <span className="text-white font-bold text-xl">5,000.0000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Trading Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl h-full">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Live Trading Activity
                  </CardTitle>
                  <div className="flex space-x-2">
                    {["1h", "24h", "7d", "30d"].map((timeframe) => (
                      <Button
                        key={timeframe}
                        variant={selectedTimeframe === timeframe ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setSelectedTimeframe(timeframe)}
                        className={selectedTimeframe === timeframe 
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg" 
                          : "text-blue-200 hover:text-white hover:bg-white/10"
                        }
                      >
                        {timeframe}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  <div className="grid grid-cols-4 gap-4 p-4 text-sm font-semibold text-blue-200 border-b border-white/10 bg-white/5">
                    <span>Time</span>
                    <span>Price (USD)</span>
                    <span>Amount (Pi)</span>
                    <span>Type</span>
                  </div>
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-4 text-sm hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0">
                      <span className="text-blue-200 font-medium">{trade.time}</span>
                      <span className="text-white font-bold text-lg">{trade.price}</span>
                      <span className="text-white font-medium">{trade.amount}</span>
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                          trade.type === 'buy' 
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                            : 'bg-red-500/20 text-red-400 border border-red-400/30'
                        }`}>
                          {trade.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;

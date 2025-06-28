
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

const Exchange = () => {
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

  const marketStats = {
    lastPrice: "$0.5000",
    low24h: "$0.5000",
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
        {/* Market Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">π</span>
              </div>
              <h1 className="text-3xl font-bold text-white">USD/PI</h1>
            </div>
          </div>
          
          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="text-blue-200 text-sm">Last Price</p>
                <p className="text-xl font-bold text-green-400">{marketStats.lastPrice}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="text-blue-200 text-sm">24h Range</p>
                <div className="text-sm">
                  <p className="text-red-400">Low: {marketStats.low24h}</p>
                  <p className="text-green-400">High: {marketStats.high24h}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="text-blue-200 text-sm">24h Volume</p>
                <p className="text-white font-bold">{marketStats.volume24h}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="text-blue-200 text-sm">Total Pi</p>
                <p className="text-white font-bold">{marketStats.totalPi}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-1" />
                <p className="text-blue-200 text-xs">Chart View</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trading Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Trade Pi</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="buy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/10">
                    <TabsTrigger value="buy" className="data-[state=active]:bg-green-600">Buy</TabsTrigger>
                    <TabsTrigger value="sell" className="data-[state=active]:bg-red-600">Sell</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="buy" className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Amount (USD)</Label>
                      <Input
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="Enter USD amount"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div className="text-sm text-blue-200">
                      ≈ {buyAmount ? (parseFloat(buyAmount || "0") / 0.5).toFixed(4) : "0"} π
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Buy Pi
                    </Button>
                    <div className="text-xs text-blue-300">
                      Available: $5,000.00 USD
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sell" className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Amount (Pi)</Label>
                      <Input
                        value={sellAmount}
                        onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="Enter Pi amount"
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div className="text-sm text-blue-200">
                      ≈ ${sellAmount ? (parseFloat(sellAmount || "0") * 0.5).toFixed(2) : "0.00"} USD
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <TrendingDown className="w-4 h-4 mr-2" />
                      Sell Pi
                    </Button>
                    <div className="text-xs text-blue-300">
                      Available: 5000.0000 π
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Balance Summary */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white text-lg">Balances</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">USD Balance</span>
                  <span className="text-white font-bold">$5,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Pi Balance</span>
                  <span className="text-white font-bold">5000.0000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Trades */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Recent Trades</CardTitle>
                  <div className="flex space-x-2">
                    {["24h", "7d", "30d", "All"].map((timeframe) => (
                      <Button
                        key={timeframe}
                        variant={selectedTimeframe === timeframe ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setSelectedTimeframe(timeframe)}
                        className={selectedTimeframe === timeframe 
                          ? "bg-blue-600 text-white" 
                          : "text-blue-200 hover:text-white hover:bg-white/10"
                        }
                      >
                        {timeframe}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="grid grid-cols-4 gap-4 text-sm text-blue-200 pb-2 border-b border-white/10">
                    <span>Time</span>
                    <span>Price USD</span>
                    <span>Amount Pi</span>
                    <span>Type</span>
                  </div>
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-2 text-sm hover:bg-white/5 rounded">
                      <span className="text-blue-200">{trade.time}</span>
                      <span className="text-white font-medium">{trade.price}</span>
                      <span className="text-white">{trade.amount}</span>
                      <span className={trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
                        {trade.type.toUpperCase()}
                      </span>
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

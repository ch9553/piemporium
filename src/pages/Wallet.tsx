
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { ArrowDownToLine, ArrowUpFromLine, Copy, QrCode, DollarSign, Shield, Clock, CheckCircle2, AlertCircle, TrendingUp, Send } from "lucide-react";
import { toast } from "sonner";

const Wallet = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [piReceiveAmount, setPiReceiveAmount] = useState("");
  const [piSendAmount, setPiSendAmount] = useState("");
  const [piSendAddress, setPiSendAddress] = useState("");

  const piAddress = "pi1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(piAddress);
    toast.success("Address copied to clipboard!");
  };

  const transactions = [
    { id: "1", type: "deposit", amount: "$1,000.00", status: "completed", date: "2024-01-15", time: "14:32" },
    { id: "2", type: "withdraw", amount: "$500.00", status: "pending", date: "2024-01-14", time: "09:15" },
    { id: "3", type: "pi_receive", amount: "2,500.0000 π", status: "completed", date: "2024-01-13", time: "16:45" },
    { id: "4", type: "pi_send", amount: "1,000.0000 π", status: "completed", date: "2024-01-12", time: "11:20" },
    { id: "5", type: "deposit", amount: "$2,000.00", status: "completed", date: "2024-01-11", time: "13:10" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDownToLine className="w-4 h-4 text-green-400" />;
      case "withdraw":
        return <ArrowUpFromLine className="w-4 h-4 text-red-400" />;
      case "pi_receive":
        return <TrendingUp className="w-4 h-4 text-orange-400" />;
      case "pi_send":
        return <Send className="w-4 h-4 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            Secure Digital Wallet
          </h1>
          <p className="text-blue-300 text-lg">Manage your funds with enterprise-grade security</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* USD Wallet */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-green-400/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <DollarSign className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-green-300 text-lg font-medium">USD Wallet</p>
                    <p className="text-green-400 text-sm">Available Balance</p>
                  </div>
                </div>
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-green-400 mb-2">$5,000.00</p>
                <p className="text-green-300 text-sm">Available Balance</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                  <ArrowDownToLine className="w-4 h-4 mr-2" />
                  Deposit USD
                </Button>
                <Button variant="outline" className="border-green-400/50 text-green-300 hover:bg-green-500/10 hover:border-green-400">
                  <ArrowUpFromLine className="w-4 h-4 mr-2" />
                  Withdraw USD
                </Button>
              </div>

              <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                <p className="text-green-300 text-xs text-center">Pending Transactions: $0.00</p>
              </div>
            </CardContent>
          </Card>

          {/* Pi Wallet */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-orange-400/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 p-3 rounded-full">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">π</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-orange-300 text-lg font-medium">Pi Wallet</p>
                    <p className="text-orange-400 text-sm">Available Balance</p>
                  </div>
                </div>
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-orange-400 mb-2">5,000.0000</p>
                <p className="text-orange-300 text-sm">Available Balance</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-orange-400/50 text-orange-300 hover:bg-orange-500/10 hover:border-orange-400">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Receive Pi
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Pi
                </Button>
              </div>

              <div className="mt-4 p-3 bg-orange-500/10 rounded-lg border border-orange-400/20">
                <p className="text-orange-300 text-xs text-center">Pending Transactions: 0.0000 π</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Deposit & Withdraw */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-slate-700/50">
              <CardTitle className="text-white flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Deposit & Withdraw
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="deposit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-700/50 mb-6">
                  <TabsTrigger value="deposit" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white">
                    Deposit
                  </TabsTrigger>
                  <TabsTrigger value="withdraw" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white">
                    Withdraw
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="deposit" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Amount (USD)</Label>
                    <Input
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="bg-slate-700/50 border-slate-600/50 text-white"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <ArrowDownToLine className="w-4 h-4 mr-2" />
                    Deposit USD
                  </Button>
                </TabsContent>
                
                <TabsContent value="withdraw" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Amount (USD)</Label>
                    <Input
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="bg-slate-700/50 border-slate-600/50 text-white"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                    <ArrowUpFromLine className="w-4 h-4 mr-2" />
                    Withdraw USD
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Pi Network Address */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-slate-700/50">
              <CardTitle className="text-white flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">π</span>
                </div>
                Your Pi Network Address
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label className="text-white mb-2 block">Your Receiving Address:</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    value={piAddress}
                    readOnly
                    className="bg-slate-700/50 border-slate-600/50 text-white text-sm"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                    className="border-slate-600/50 text-slate-300 hover:bg-slate-700/50"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 border-orange-400/50 text-orange-300 hover:bg-orange-500/10">
                  <QrCode className="w-4 h-4 mr-2" />
                  Show QR
                </Button>
                <Button 
                  onClick={copyToClipboard}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pi Send/Receive */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-slate-700/50">
              <CardTitle className="text-white flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">π</span>
                </div>
                Pi Transactions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="send" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-700/50 mb-6">
                  <TabsTrigger value="send" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white">
                    Send Pi
                  </TabsTrigger>
                  <TabsTrigger value="receive" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
                    Receive Pi
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="send" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Recipient Address</Label>
                    <Input
                      value={piSendAddress}
                      onChange={(e) => setPiSendAddress(e.target.value)}
                      placeholder="Enter Pi address"
                      className="bg-slate-700/50 border-slate-600/50 text-white text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Amount (Pi)</Label>
                    <Input
                      value={piSendAmount}
                      onChange={(e) => setPiSendAmount(e.target.value)}
                      placeholder="Enter Pi amount"
                      className="bg-slate-700/50 border-slate-600/50 text-white"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Pi
                  </Button>
                </TabsContent>
                
                <TabsContent value="receive" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Expected Amount (Pi)</Label>
                    <Input
                      value={piReceiveAmount}
                      onChange={(e) => setPiReceiveAmount(e.target.value)}
                      placeholder="Enter expected amount (optional)"
                      className="bg-slate-700/50 border-slate-600/50 text-white"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Generate Receive QR
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-xl">
          <CardHeader className="border-b border-slate-700/50">
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Transaction History
              </div>
              <Button variant="outline" size="sm" className="border-slate-600/50 text-slate-300 hover:bg-slate-700/50">
                Export
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              <div className="grid grid-cols-5 gap-4 p-4 text-sm font-semibold text-blue-300 border-b border-slate-700/50 bg-slate-700/20">
                <span>Type</span>
                <span>Amount</span>
                <span>Status</span>
                <span>Date</span>
                <span>Time</span>
              </div>
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-5 gap-4 p-4 text-sm hover:bg-slate-700/20 transition-colors border-b border-slate-700/30 last:border-b-0">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(tx.type)}
                    <span className="text-white capitalize">
                      {tx.type.replace('_', ' ')}
                    </span>
                  </div>
                  <span className="text-white font-medium">{tx.amount}</span>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(tx.status)}
                    <span className={`text-sm font-medium ${
                      tx.status === 'completed' ? 'text-green-400' :
                      tx.status === 'pending' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                  <span className="text-blue-300">{tx.date}</span>
                  <span className="text-blue-300">{tx.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;

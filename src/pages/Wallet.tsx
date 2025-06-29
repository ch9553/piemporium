
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { ArrowUpRight, ArrowDownRight, Copy, History, Shield, Zap, CreditCard, Wallet as WalletIcon, DollarSign } from "lucide-react";

const Wallet = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");

  const transactions = [
    { id: "1", type: "deposit", amount: "1000.00", currency: "USD", status: "completed", date: "2024-01-15", hash: "0x1234...5678", fee: "0.00" },
    { id: "2", type: "withdraw", amount: "500.0000", currency: "Pi", status: "completed", date: "2024-01-14", hash: "0xabcd...efgh", fee: "0.50" },
    { id: "3", type: "deposit", amount: "2000.00", currency: "USD", status: "completed", date: "2024-01-13", hash: "0x9876...5432", fee: "0.00" },
    { id: "4", type: "trade", amount: "250.0000", currency: "Pi", status: "completed", date: "2024-01-12", hash: "0xfedc...ba98", fee: "0.25" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            Secure Digital Wallet
          </h1>
          <p className="text-blue-200 text-lg">Manage your funds with enterprise-grade security</p>
        </div>

        {/* Enhanced Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2 bg-gradient-to-br from-green-500/10 to-green-600/20 border-green-400/30 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-green-400/20">
              <CardTitle className="text-white flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-green-400" />
                  USD Wallet
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">$5,000.00</div>
                  <div className="text-green-300 text-sm">Available Balance</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg h-12">
                  <ArrowDownRight className="w-5 h-5 mr-2" />
                  Deposit USD
                </Button>
                <Button variant="outline" className="border-green-400/30 text-green-300 hover:bg-green-400/10 h-12">
                  <ArrowUpRight className="w-5 h-5 mr-2" />
                  Withdraw USD
                </Button>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Pending Deposits:</span>
                  <span className="text-green-400 font-medium">$0.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 border-orange-400/30 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-orange-400/20">
              <CardTitle className="text-white flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">π</span>
                  </div>
                  Pi Wallet
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-orange-400">5,000.0000</div>
                <div className="text-orange-300 text-sm">Available Pi</div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Button variant="outline" className="border-orange-400/30 text-orange-300 hover:bg-orange-400/10">
                  <ArrowDownRight className="w-4 h-4 mr-2" />
                  Receive Pi
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Send Pi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Deposit/Withdraw Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Deposit & Withdraw
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="deposit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 mb-6">
                  <TabsTrigger value="deposit" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600">
                    Deposit
                  </TabsTrigger>
                  <TabsTrigger value="withdraw" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600">
                    Withdraw
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="deposit" className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-white font-medium">Deposit Amount (USD)</Label>
                    <Input
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="bg-white/10 border-white/20 text-white h-12 text-lg focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-400/30">
                    <div className="flex items-center mb-3">
                      <Shield className="w-5 h-5 text-blue-400 mr-2" />
                      <p className="text-blue-200 font-medium">Secure PayPal Integration</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-white">Send payment to: <span className="font-mono bg-black/30 px-2 py-1 rounded">payments@piemporium.com</span></p>
                      <p className="text-blue-200">Include your user ID: <span className="font-mono bg-black/30 px-2 py-1 rounded">USER_12345</span></p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 font-semibold shadow-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Generate Secure Deposit Link
                  </Button>
                </TabsContent>
                
                <TabsContent value="withdraw" className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-white font-medium">Withdraw Amount (Pi)</Label>
                    <Input
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter Pi amount"
                      className="bg-white/10 border-white/20 text-white h-12 text-lg focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-white font-medium">Pi Network Address</Label>
                    <div className="flex space-x-2">
                      <Input
                        value={withdrawAddress}
                        onChange={(e) => setWithdrawAddress(e.target.value)}
                        placeholder="Enter Pi wallet address"
                        className="bg-white/10 border-white/20 text-white h-12"
                      />
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-4">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-orange-500/10 p-3 rounded-lg border border-orange-400/20">
                    <div className="flex justify-between text-sm">
                      <span className="text-orange-200">Network Fee:</span>
                      <span className="text-orange-400 font-medium">0.1% (Min: 1 π, Max: 100 π)</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 font-semibold shadow-lg">
                    <ArrowUpRight className="w-5 h-5 mr-2" />
                    Withdraw Pi Securely
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Enhanced Wallet Address */}
          <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-white flex items-center">
                <WalletIcon className="w-5 h-5 mr-2" />
                Your Pi Network Address
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-4 rounded-lg border border-slate-600/30">
                <p className="text-blue-200 text-sm mb-3 font-medium">Your Receiving Address:</p>
                <div className="flex items-center space-x-3 mb-4">
                  <code className="text-white text-sm bg-black/40 px-3 py-2 rounded flex-1 font-mono border border-slate-600/30">
                    GB7SPWX2KBXL5QZJM3TPGJKPG4H8VQX9N2M4L6K1R3S7
                  </code>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 shadow-lg">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10">
                    Show QR Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-green-400/30 text-green-300 hover:bg-green-400/10">
                    Share Address
                  </Button>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/20 p-4 rounded-lg border border-green-400/30">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  <p className="text-green-200 font-medium">Security Notice</p>
                </div>
                <p className="text-green-100 text-sm leading-relaxed">
                  Always verify your address before sharing. This address is unique to your account and secured with enterprise-grade encryption.
                </p>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/20">
                <h4 className="text-blue-200 font-medium mb-2">Address Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Total Received:</span>
                    <span className="text-white font-medium">2,500.00 π</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Total Sent:</span>
                    <span className="text-white font-medium">500.00 π</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Transactions:</span>
                    <span className="text-white font-medium">47</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Transaction History */}
        <Card className="bg-white/5 border-white/20 backdrop-blur-sm shadow-xl">
          <CardHeader className="border-b border-white/10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center">
                <History className="w-5 h-5 mr-2" />
                Transaction History
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Export CSV
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              <div className="grid grid-cols-7 gap-4 p-4 text-sm font-semibold text-blue-200 border-b border-white/10 bg-white/5">
                <span>Date</span>
                <span>Type</span>
                <span>Amount</span>
                <span>Currency</span>
                <span>Fee</span>
                <span>Status</span>
                <span>Hash</span>
              </div>
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-7 gap-4 p-4 text-sm hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0">
                  <span className="text-blue-200 font-medium">{tx.date}</span>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      tx.type === 'deposit' ? 'bg-green-500/20 text-green-400 border border-green-400/30' : 
                      tx.type === 'withdraw' ? 'bg-red-500/20 text-red-400 border border-red-400/30' : 
                      'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {tx.type}
                    </span>
                  </div>
                  <span className="text-white font-bold">{tx.amount}</span>
                  <span className="text-white">{tx.currency}</span>
                  <span className="text-orange-400">{tx.fee} {tx.currency}</span>
                  <span className="text-green-400 font-medium capitalize">{tx.status}</span>
                  <div className="flex items-center space-x-2">
                    <code className="text-blue-300 text-xs font-mono">{tx.hash}</code>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-blue-300 hover:text-white hover:bg-white/10">
                      <Copy className="w-3 h-3" />
                    </Button>
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

export default Wallet;


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { ArrowUpRight, ArrowDownRight, Copy, History } from "lucide-react";

const Wallet = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");

  const transactions = [
    { id: "1", type: "deposit", amount: "1000.00", currency: "USD", status: "completed", date: "2024-01-15", hash: "0x1234...5678" },
    { id: "2", type: "withdraw", amount: "500.0000", currency: "Pi", status: "completed", date: "2024-01-14", hash: "0xabcd...efgh" },
    { id: "3", type: "deposit", amount: "2000.00", currency: "USD", status: "completed", date: "2024-01-13", hash: "0x9876...5432" },
    { id: "4", type: "trade", amount: "250.0000", currency: "Pi", status: "completed", date: "2024-01-12", hash: "0xfedc...ba98" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-blue-200">Manage your funds and transactions</p>
        </div>

        {/* Wallet Balances */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center justify-between">
                USD Wallet
                <div className="text-2xl font-bold text-green-400">$5,000.00</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ArrowDownRight className="w-4 h-4 mr-2" />
                  Deposit
                </Button>
                <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Withdraw
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center justify-between">
                Pi Wallet
                <div className="text-2xl font-bold text-orange-400">5000.0000</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                  <ArrowDownRight className="w-4 h-4 mr-2" />
                  Receive
                </Button>
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deposit/Withdraw Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Deposit & Withdraw</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="deposit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10">
                  <TabsTrigger value="deposit" className="data-[state=active]:bg-green-600">Deposit</TabsTrigger>
                  <TabsTrigger value="withdraw" className="data-[state=active]:bg-blue-600">Withdraw</TabsTrigger>
                </TabsList>
                
                <TabsContent value="deposit" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Deposit Amount (USD)</Label>
                    <Input
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <p className="text-blue-200 text-sm mb-2">PayPal Deposit Instructions:</p>
                    <p className="text-white text-sm">Send payment to: payments@piemporium.com</p>
                    <p className="text-blue-200 text-xs">Include your user ID in the memo</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Generate Deposit Link
                  </Button>
                </TabsContent>
                
                <TabsContent value="withdraw" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white">Withdraw Amount (Pi)</Label>
                    <Input
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter Pi amount"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Pi Network Address</Label>
                    <div className="flex space-x-2">
                      <Input
                        value={withdrawAddress}
                        onChange={(e) => setWithdrawAddress(e.target.value)}
                        placeholder="Enter Pi wallet address"
                        className="bg-white/10 border-white/20 text-white"
                      />
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-xs text-blue-300">
                    Withdrawal fee: 0.1% (Min: 1 π, Max: 100 π)
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Withdraw Pi
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Wallet Address */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Your Pi Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-blue-200 text-sm mb-2">Your Pi Network Address:</p>
                <div className="flex items-center space-x-2">
                  <code className="text-white text-sm bg-black/30 px-3 py-2 rounded flex-1">
                    GB7SPWX2KBXL5QZJM3TPGJKPG4H8VQX9N2M4L6K1R3S7
                  </code>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <p className="text-green-200 text-sm">
                  Share this address to receive Pi payments. Always verify the address before sharing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <History className="w-5 h-5 mr-2" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="grid grid-cols-6 gap-4 text-sm text-blue-200 pb-2 border-b border-white/10">
                <span>Date</span>
                <span>Type</span>
                <span>Amount</span>
                <span>Currency</span>
                <span>Status</span>
                <span>Hash</span>
              </div>
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-6 gap-4 py-3 text-sm hover:bg-white/5 rounded">
                  <span className="text-blue-200">{tx.date}</span>
                  <span className={`capitalize ${
                    tx.type === 'deposit' ? 'text-green-400' : 
                    tx.type === 'withdraw' ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    {tx.type}
                  </span>
                  <span className="text-white font-medium">{tx.amount}</span>
                  <span className="text-white">{tx.currency}</span>
                  <span className="text-green-400 capitalize">{tx.status}</span>
                  <div className="flex items-center space-x-2">
                    <code className="text-blue-300 text-xs">{tx.hash}</code>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-blue-300 hover:text-white">
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

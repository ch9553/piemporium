
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { User, Settings, Shield, Bell, Camera } from "lucide-react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "Demo",
    email: "demo@example.com",
    phone: "",
    country: "United States"
  });

  const [notifications, setNotifications] = useState({
    trades: true,
    deposits: true,
    withdrawals: true,
    marketing: false
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log("Profile updated:", profileData);
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
          <p className="text-blue-200">Manage your profile and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-6">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-400 to-blue-600">
                    <AvatarFallback className="text-white text-2xl font-bold">D</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 rounded-full w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{profileData.username}</h3>
                <p className="text-blue-200 text-sm mb-4">{profileData.email}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Member since:</span>
                    <span className="text-white">Jan 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Total trades:</span>
                    <span className="text-white">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Account level:</span>
                    <span className="text-green-400">Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Account Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Portfolio Value</span>
                  <span className="text-white font-bold">$7,500.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Trade Volume (30d)</span>
                  <span className="text-white font-bold">$12,450.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Avg. Trade Size</span>
                  <span className="text-white font-bold">$264.89</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Tabs */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-white/10 mb-6">
                    <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="security" className="data-[state=active]:bg-blue-600">
                      <Shield className="w-4 h-4 mr-2" />
                      Security
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-600">
                      <Bell className="w-4 h-4 mr-2" />
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profile" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Profile Information</h3>
                      <form onSubmit={handleProfileUpdate} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-white">Username *</Label>
                            <Input
                              value={profileData.username}
                              onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-white">Email Address</Label>
                            <Input
                              value={profileData.email}
                              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-white">Phone Number</Label>
                            <Input
                              value={profileData.phone}
                              onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                              placeholder="Enter phone number"
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-white">Country</Label>
                            <Input
                              value={profileData.country}
                              onChange={(e) => setProfileData(prev => ({ ...prev, country: e.target.value }))}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Update Profile
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="security" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Security Settings</h3>
                      <div className="space-y-6">
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-medium">Change Password</h4>
                                <p className="text-blue-200 text-sm">Update your account password</p>
                              </div>
                              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                Change
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                                <p className="text-blue-200 text-sm">Add an extra layer of security</p>
                              </div>
                              <Button className="bg-green-600 hover:bg-green-700">
                                Enable
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-medium">Login History</h4>
                                <p className="text-blue-200 text-sm">View recent login activity</p>
                              </div>
                              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                View
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notifications" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Notification Preferences</h3>
                      <div className="space-y-4">
                        {Object.entries(notifications).map(([key, value]) => (
                          <Card key={key} className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-white font-medium capitalize">
                                    {key === 'marketing' ? 'Marketing Emails' : `${key} Notifications`}
                                  </h4>
                                  <p className="text-blue-200 text-sm">
                                    {key === 'trades' && 'Get notified about trade executions'}
                                    {key === 'deposits' && 'Get notified about deposits'}
                                    {key === 'withdrawals' && 'Get notified about withdrawals'}
                                    {key === 'marketing' && 'Receive promotional emails and updates'}
                                  </p>
                                </div>
                                <Button
                                  variant={value ? "default" : "outline"}
                                  onClick={() => handleNotificationChange(key, !value)}
                                  className={value 
                                    ? "bg-green-600 hover:bg-green-700" 
                                    : "border-white/20 text-white hover:bg-white/10"
                                  }
                                >
                                  {value ? 'On' : 'Off'}
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

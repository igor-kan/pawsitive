
import { Button } from "@/components/ui/button";
import { Heart, Camera, Phone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
              <Heart className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">AI-Powered Pet Care</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Pet's Health,
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}Powered by AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Get instant AI-powered health insights, connect with licensed veterinarians, 
              and keep your furry friends healthy with personalized care plans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Hotline
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24/7 AI Assistant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Licensed Veterinarians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Health Check</h3>
                    <p className="text-sm text-gray-500">Analyzing symptoms...</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-700">Heart Rate</span>
                    <span className="text-sm text-green-600">Normal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-yellow-700">Appetite</span>
                    <span className="text-sm text-yellow-600">Monitor</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-700">Activity</span>
                    <span className="text-sm text-blue-600">Excellent</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Photo for Analysis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

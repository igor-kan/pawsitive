
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, Phone, Calendar, User, Search, Bell, Check } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AIVetAssistant } from "@/components/AIVetAssistant";
import { SymptomChecker } from "@/components/SymptomChecker";
import { PetProfile } from "@/components/PetProfile";
import { HealthTimeline } from "@/components/HealthTimeline";
import { SubscriptionTiers } from "@/components/SubscriptionTiers";
import { Features } from "@/components/Features";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "symptom-checker":
        return <SymptomChecker />;
      case "pet-profile":
        return <PetProfile />;
      case "health-timeline":
        return <HealthTimeline />;
      case "subscription":
        return <SubscriptionTiers />;
      case "ai-assistant":
        return <AIVetAssistant />;
      default:
        return (
          <>
            <HeroSection />
            <Features />
            <SubscriptionTiers />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pawlytics
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection("home")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "home" 
                    ? "text-purple-600 bg-purple-100" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection("ai-assistant")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "ai-assistant" 
                    ? "text-purple-600 bg-purple-100" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                AI Assistant
              </button>
              <button
                onClick={() => setActiveSection("symptom-checker")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "symptom-checker" 
                    ? "text-purple-600 bg-purple-100" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Symptom Checker
              </button>
              <button
                onClick={() => setActiveSection("pet-profile")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "pet-profile" 
                    ? "text-purple-600 bg-purple-100" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Pet Profile
              </button>
              <button
                onClick={() => setActiveSection("health-timeline")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "health-timeline" 
                    ? "text-purple-600 bg-purple-100" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Health Timeline
              </button>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Pawlytics</span>
              </div>
              <p className="text-gray-400">
                AI-powered pet health platform for better care and peace of mind.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Vet Assistant</li>
                <li>Symptom Checker</li>
                <li>Tele-Vet Services</li>
                <li>Health Timeline</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Emergency Hotline</li>
                <li>Contact Support</li>
                <li>Documentation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pawlytics. All rights reserved. Not a replacement for professional veterinary care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

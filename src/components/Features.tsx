
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Phone, Calendar, Heart, Bell, Search } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "AI Vet Assistant",
      description: "24/7 conversational AI trained on veterinary data to answer your pet health questions instantly.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Camera,
      title: "Photo Diagnostics",
      description: "Upload photos of symptoms, wounds, or behaviors for AI-powered analysis and recommendations.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Phone,
      title: "Tele-Vet Services",
      description: "Connect with licensed veterinarians via video calls, with full access to your pet's AI health history.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Health Timeline",
      description: "Track symptoms, medications, vet visits, and create personalized care plans for your pet.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Never miss vaccinations, medication times, or check-ups with intelligent health reminders.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Search,
      title: "Symptom Checker",
      description: "Advanced symptom analysis with triage decision trees to help you know when to seek care.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything Your Pet Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered diagnostics to licensed veterinary care, we provide comprehensive health solutions for your furry family members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

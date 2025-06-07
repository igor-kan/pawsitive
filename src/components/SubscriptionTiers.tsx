
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const SubscriptionTiers = () => {
  const tiers = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      description: "Perfect for pet owners who want AI-powered insights",
      features: [
        "AI Vet Assistant (unlimited)",
        "Basic symptom checker",
        "Health timeline tracking",
        "Vaccination reminders",
        "Email support"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Plus",
      price: "$29",
      period: "/month",
      description: "Most popular for comprehensive pet care",
      features: [
        "Everything in Basic",
        "Photo diagnostic analysis",
        "Monthly vet consultation",
        "At-home test kit discounts",
        "Priority chat support",
        "Advanced health analytics"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month",
      description: "Complete peace of mind for your pet's health",
      features: [
        "Everything in Plus",
        "Unlimited vet consultations",
        "24/7 emergency hotline",
        "Free at-home diagnostic kits",
        "Pet insurance assistance",
        "Personalized care plans",
        "Priority emergency triage"
      ],
      popular: false,
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Pet Care Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic AI assistance to comprehensive health management, 
            find the perfect plan for your pet's needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold text-white">{tier.name[0]}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600 ml-1">{tier.period}</span>
                </div>
                <CardDescription className="text-gray-600">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.popular ? "Start Free Trial" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. Cancel anytime.
          </p>
          <p className="text-sm text-gray-500">
            * Not a replacement for emergency veterinary care. Always consult a licensed veterinarian for serious health concerns.
          </p>
        </div>
      </div>
    </section>
  );
};

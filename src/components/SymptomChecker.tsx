
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Camera, Phone } from "lucide-react";

export const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const symptomCategories = [
    {
      category: "Digestive",
      symptoms: ["Vomiting", "Diarrhea", "Loss of appetite", "Excessive drooling", "Constipation"]
    },
    {
      category: "Behavioral",
      symptoms: ["Lethargy", "Excessive scratching", "Aggression", "Hiding", "Restlessness"]
    },
    {
      category: "Physical",
      symptoms: ["Limping", "Coughing", "Difficulty breathing", "Excessive thirst", "Hair loss"]
    },
    {
      category: "Skin & Coat",
      symptoms: ["Red spots", "Bumps", "Dry skin", "Oily coat", "Hot spots"]
    }
  ];

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptoms = () => {
    setShowResults(true);
  };

  const getUrgencyLevel = () => {
    if (selectedSymptoms.some(s => ["Difficulty breathing", "Vomiting", "Diarrhea"].includes(s))) {
      return { level: "High", color: "red", action: "Seek immediate veterinary care" };
    } else if (selectedSymptoms.some(s => ["Lethargy", "Loss of appetite", "Coughing"].includes(s))) {
      return { level: "Medium", color: "yellow", action: "Schedule a vet consultation within 24-48 hours" };
    } else {
      return { level: "Low", color: "green", action: "Monitor symptoms and consider scheduling a routine check-up" };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI Symptom Checker
          </h1>
          <p className="text-xl text-gray-600">
            Select your pet's symptoms for AI-powered analysis and care recommendations.
          </p>
        </div>

        {!showResults ? (
          <div className="space-y-6">
            {symptomCategories.map((category, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-blue-600" />
                    <span>{category.category} Symptoms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.symptoms.map((symptom, symptomIndex) => (
                      <div key={symptomIndex} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${category.category}-${symptomIndex}`}
                          checked={selectedSymptoms.includes(symptom)}
                          onCheckedChange={() => handleSymptomToggle(symptom)}
                        />
                        <label
                          htmlFor={`${category.category}-${symptomIndex}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {symptom}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center">
              <Button
                onClick={analyzeSymptoms}
                disabled={selectedSymptoms.length === 0}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4"
              >
                Analyze Symptoms ({selectedSymptoms.length})
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle>Symptom Analysis Results</CardTitle>
                <CardDescription className="text-blue-100">
                  Based on the symptoms you've selected
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Selected Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.map((symptom, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border-l-4 border-l-blue-500 bg-blue-50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Urgency Level</h3>
                      <Badge className={`bg-${getUrgencyLevel().color}-500 text-white`}>
                        {getUrgencyLevel().level}
                      </Badge>
                    </div>
                    <p className="text-gray-700">{getUrgencyLevel().action}</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">AI Recommendations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monitor your pet closely for the next 24 hours</li>
                      <li>• Ensure your pet has access to fresh water</li>
                      <li>• Consider withholding food for 12-24 hours if digestive symptoms are present</li>
                      <li>• Document any changes in behavior or additional symptoms</li>
                      <li>• Take photos or videos of visible symptoms for veterinary consultation</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Book Vet Consultation
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Camera className="h-4 w-4 mr-2" />
                      Upload Photos
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowResults(false)}
                      className="flex-1"
                    >
                      Check More Symptoms
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This symptom checker is for informational purposes only and should not replace professional veterinary advice. Always consult with a licensed veterinarian for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

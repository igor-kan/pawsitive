
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Calendar } from "lucide-react";

export const PetProfile = () => {
  const [petData, setPetData] = useState({
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    weight: "65 lbs",
    gender: "Male",
    neutered: "Yes"
  });

  const [healthConditions] = useState([
    "Seasonal Allergies",
    "Hip Dysplasia Risk"
  ]);

  const [medications] = useState([
    { name: "Apoquel", dosage: "16mg", frequency: "Twice daily", nextDue: "Today 6:00 PM" },
    { name: "Joint Supplement", dosage: "1 tablet", frequency: "Daily", nextDue: "Tomorrow 8:00 AM" }
  ]);

  const [vaccinations] = useState([
    { name: "Rabies", date: "2024-03-15", nextDue: "2027-03-15", status: "Current" },
    { name: "DHPP", date: "2024-02-10", nextDue: "2025-02-10", status: "Current" },
    { name: "Bordetella", date: "2023-12-05", nextDue: "2024-12-05", status: "Due Soon" }
  ]);

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pet Profile
          </h1>
          <p className="text-xl text-gray-600">
            Manage your pet's complete health information in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{petData.name}</h3>
                <p className="text-gray-600">{petData.breed}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={petData.name} onChange={(e) => setPetData({...petData, name: e.target.value})} />
                </div>
                
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select value={petData.type} onValueChange={(value) => setPetData({...petData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dog">Dog</SelectItem>
                      <SelectItem value="Cat">Cat</SelectItem>
                      <SelectItem value="Bird">Bird</SelectItem>
                      <SelectItem value="Rabbit">Rabbit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="breed">Breed</Label>
                  <Input id="breed" value={petData.breed} onChange={(e) => setPetData({...petData, breed: e.target.value})} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" value={petData.age} onChange={(e) => setPetData({...petData, age: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input id="weight" value={petData.weight} onChange={(e) => setPetData({...petData, weight: e.target.value})} />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Health Conditions & Medications */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Health & Medications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Health Conditions</h3>
                <div className="space-y-2">
                  {healthConditions.map((condition, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-start px-3 py-2">
                      {condition}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Add Condition
                </Button>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Current Medications</h3>
                <div className="space-y-3">
                  {medications.map((med, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-900">{med.name}</h4>
                        <Badge variant="outline" size="sm">{med.dosage}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{med.frequency}</p>
                      <p className="text-xs text-purple-600 font-medium">Next: {med.nextDue}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Add Medication
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vaccinations */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Vaccinations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {vaccinations.map((vaccine, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{vaccine.name}</h4>
                      <Badge 
                        className={`${
                          vaccine.status === "Current" ? "bg-green-100 text-green-700" :
                          vaccine.status === "Due Soon" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}
                      >
                        {vaccine.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">Last: {vaccine.date}</p>
                    <p className="text-sm text-gray-600">Next: {vaccine.nextDue}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Schedule Vaccination
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your pet's health with these convenient options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Book Vet Visit
                </Button>
                <Button variant="outline">
                  Upload Photo
                </Button>
                <Button variant="outline">
                  Add Symptom
                </Button>
                <Button variant="outline">
                  View Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, Camera, Phone, Bell } from "lucide-react";

export const HealthTimeline = () => {
  const timelineEvents = [
    {
      id: 1,
      type: "vet-visit",
      title: "Annual Checkup",
      description: "Comprehensive health examination with Dr. Smith",
      date: "2024-05-20",
      time: "10:30 AM",
      status: "completed",
      icon: Phone,
      color: "blue"
    },
    {
      id: 2,
      type: "symptom",
      title: "Scratching Behavior",
      description: "Noticed excessive scratching around ears",
      date: "2024-05-18",
      time: "2:15 PM",
      status: "monitoring",
      icon: Bell,
      color: "yellow"
    },
    {
      id: 3,
      type: "medication",
      title: "Started Apoquel",
      description: "16mg twice daily for seasonal allergies",
      date: "2024-05-15",
      time: "8:00 AM",
      status: "ongoing",
      icon: Heart,
      color: "green"
    },
    {
      id: 4,
      type: "photo",
      title: "Skin Condition Photos",
      description: "Uploaded photos of red spots on belly",
      date: "2024-05-12",
      time: "6:45 PM",
      status: "analyzed",
      icon: Camera,
      color: "purple"
    },
    {
      id: 5,
      type: "vaccination",
      title: "Rabies Vaccination",
      description: "3-year rabies vaccine administered",
      date: "2024-03-15",
      time: "11:00 AM",
      status: "completed",
      icon: Calendar,
      color: "green"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700";
      case "ongoing": return "bg-blue-100 text-blue-700";
      case "monitoring": return "bg-yellow-100 text-yellow-700";
      case "analyzed": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-500";
      case "green": return "bg-green-500";
      case "yellow": return "bg-yellow-500";
      case "purple": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Health Timeline
          </h1>
          <p className="text-xl text-gray-600">
            Track your pet's complete health journey with detailed timeline records.
          </p>
        </div>

        <div className="mb-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-t-lg">
              <CardTitle>Buddy's Health Summary</CardTitle>
              <CardDescription className="text-indigo-100">
                Last updated: May 20, 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Health Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Active Medications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600">Monitoring Items</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <Card key={event.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${getIconColor(event.color)} flex items-center justify-center flex-shrink-0`}>
                    <event.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-3">
            Add New Event
          </Button>
        </div>

        {/* Upcoming Events */}
        <div className="mt-12">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-indigo-600" />
                <span>Upcoming Events</span>
              </CardTitle>
              <CardDescription>
                Don't miss these important health milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Bordetella Vaccination Due</h4>
                  <p className="text-sm text-gray-600">Annual booster recommended</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-yellow-700">Dec 5, 2024</p>
                  <p className="text-sm text-gray-600">In 6 months</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Dental Cleaning</h4>
                  <p className="text-sm text-gray-600">Preventive dental care</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-700">Aug 15, 2024</p>
                  <p className="text-sm text-gray-600">In 3 months</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

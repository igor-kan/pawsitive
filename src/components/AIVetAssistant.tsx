
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, User } from "lucide-react";

export const AIVetAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Hi! I'm your AI Vet Assistant. I'm here to help with your pet's health questions. What can I help you with today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai",
        content: "Thank you for your question. Based on the symptoms you've described, I'd recommend monitoring your pet closely. If symptoms persist or worsen, please consider scheduling a consultation with one of our licensed veterinarians. Would you like me to help you book an appointment?",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const quickQuestions = [
    "My dog is vomiting, what should I do?",
    "How much should my cat eat daily?",
    "When do puppies need their first shots?",
    "Signs of dental problems in pets?"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI Vet Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Get instant answers to your pet health questions from our AI assistant trained on veterinary data.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>AI Vet Assistant</CardTitle>
                <CardDescription className="text-purple-100">
                  Available 24/7 • Trained on veterinary data
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user" 
                        ? "bg-purple-500" 
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}>
                      {message.type === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Heart className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl p-4 ${
                      message.type === "user" 
                        ? "bg-purple-500 text-white" 
                        : "bg-gray-100 text-gray-900"
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-2 ${
                        message.type === "user" ? "text-purple-100" : "text-gray-500"
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <p className="text-sm font-medium text-gray-700 mb-3">Quick questions:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-left justify-start h-auto py-2 px-3 text-xs"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 border-t">
              <div className="flex space-x-3">
                <Input
                  placeholder="Ask about your pet's health..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Send
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This AI assistant is for informational purposes only and is not a substitute for professional veterinary advice.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

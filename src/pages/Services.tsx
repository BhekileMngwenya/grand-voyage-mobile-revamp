
import { Plane, Calendar, Briefcase, Heart, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable and punctual airport pickup and drop-off services",
      features: ["Flight tracking", "Meet & greet service", "Luggage assistance", "24/7 availability"],
      price: "From $45"
    },
    {
      icon: Calendar,
      title: "Event Transportation",
      description: "Perfect for weddings, parties, and special occasions",
      features: ["Group bookings", "Decorated vehicles", "Professional chauffeurs", "Flexible scheduling"],
      price: "From $80/hour"
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Professional business transportation solutions",
      features: ["Executive vehicles", "Corporate accounts", "Regular bookings", "Professional drivers"],
      price: "Custom pricing"
    },
    {
      icon: Heart,
      title: "Special Occasions",
      description: "Make your special moments even more memorable",
      features: ["Wedding transport", "Prom nights", "Anniversaries", "Romantic packages"],
      price: "From $120/hour"
    },
    {
      icon: Clock,
      title: "Hourly Rentals",
      description: "Flexible hourly rental services for any occasion",
      features: ["Minimum 2 hours", "Waiting time included", "Multiple stops", "Professional driver"],
      price: "From $60/hour"
    },
    {
      icon: MapPin,
      title: "City Tours",
      description: "Explore the city with our guided tour services",
      features: ["Local guides", "Customizable routes", "Photo stops", "Group discounts"],
      price: "From $100/tour"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive transportation solutions tailored to meet all your travel needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">Book This Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our premium transportation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Always On Time</h3>
              <p className="text-muted-foreground">Punctual service with real-time tracking and updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
              <p className="text-muted-foreground">Dedicated support team available 24/7 for assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-muted-foreground">Experienced, licensed, and uniformed drivers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

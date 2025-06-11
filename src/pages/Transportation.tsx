
import { Car, Users, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const Transportation = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/contact');
  };

  const vehicles = [
    {
      id: 1,
      name: "Premium Van - Model A",
      image: "/lovable-uploads/227b8e7a-799b-43ae-baf3-5308d80416a4.png",
      capacity: "14 passengers",
      features: ["Air Conditioning", "Premium Sound System", "Comfortable Seating", "Luggage Space"],
      description: "Our flagship vehicle perfect for group transportation with modern amenities and comfortable seating."
    },
    {
      id: 2,
      name: "Executive Van - Model B",
      image: "/lovable-uploads/096b92eb-5ac8-481d-9c23-303e3d519d90.png",
      capacity: "12 passengers",
      features: ["Luxury Interior", "Entertainment System", "Climate Control", "Professional Driver"],
      description: "Executive-class transportation for business trips and special occasions with premium interior design."
    },
    {
      id: 3,
      name: "Comfort Van - Model C",
      image: "/lovable-uploads/1fa0c3f3-d287-4a1f-853e-bb69f74d82ba.png",
      capacity: "16 passengers",
      features: ["Spacious Interior", "Modern Design", "Safety Features", "Reliable Service"],
      description: "Spacious and comfortable vehicle ideal for larger groups and extended journeys."
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
              Our Premium Fleet
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover our modern collection of comfortable and safe vehicles designed 
              to provide you with the best transportation experience.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90">
                        {vehicle.capacity}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {vehicle.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{vehicle.capacity}</span>
                          <div className="flex items-center gap-1 ml-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-6">
                          {vehicle.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Features & Amenities
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {vehicle.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-end">
                          <Button className="flex items-center gap-2" onClick={handleBookNow}>
                            <Car className="h-4 w-4" />
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive transportation solutions for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Car className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
              <p className="text-muted-foreground">Reliable airport pickup and drop-off services</p>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Group Events</h3>
              <p className="text-muted-foreground">Perfect for weddings, conferences, and parties</p>
            </Card>
            
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporate Travel</h3>
              <p className="text-muted-foreground">Professional business transportation solutions</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;


import { Award, Heart, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Professional Drivers" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction above everything else"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service quality"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced and certified drivers and staff"
    },
    {
      icon: Globe,
      title: "Reliability",
      description: "Dependable service you can count on anytime"
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
              About GrandTravel
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your trusted partner for premium transportation services with over a decade of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2014, GrandTravel began with a simple mission: to provide safe, reliable, 
                and comfortable transportation services that exceed customer expectations. What started 
                as a small family business has grown into a trusted transportation company serving 
                thousands of satisfied customers.
              </p>
              <p className="text-muted-foreground mb-6">
                Our commitment to quality, safety, and customer satisfaction has been the driving force 
                behind our success. We continuously invest in our fleet, technology, and team to ensure 
                we deliver the best possible experience for every journey.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be one of the leading transportation providers in our region, 
                known for our modern fleet, professional drivers, and exceptional customer service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide exceptional transportation experiences that connect people to their destinations 
                safely, comfortably, and reliably.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the premier choice for transportation services, setting the standard for quality, 
                innovation, and customer satisfaction in our industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

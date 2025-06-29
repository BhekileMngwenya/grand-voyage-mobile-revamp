import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Company Phone",
      details: ["075 112 3543"],
      description: "Main company line for bookings and inquiries"
    },
    {
      icon: Phone,
      title: "Driver Contact",
      details: ["079 797 6064", "Smangaliso Kagiso Nkuna"],
      description: "Direct contact with our professional driver"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@grandtravel.com", "booking@grandtravel.com"],
      description: "Send us an email and we'll respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["1275 Block F West, Soshanguve - F, Soshanguve, 0152"],
      description: "Click below to view our location on Google Maps",
      link: "https://maps.app.goo.gl/72fprAV2S4Sjm3Ap9?g_st=aw"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Service Available", "Office: Mon-Fri 8AM-6PM"],
      description: "We're here when you need us most"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1EgYQsD5aZ/",
      icon: Facebook
    },
    {
      name: "TikTok", 
      url: "https://www.tiktok.com/@grandtraveladventures012?_t=ZM-8xTJD8sjh7Y&_r=1",
      icon: () => (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/grndtraveladventures?igsh=Mmd3NjRnMDJ3ZTFo",
      icon: Instagram
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get in touch with our team for bookings, inquiries, or any assistance you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground font-medium">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-muted-foreground mt-2">
                            {info.description}
                          </p>
                          {info.link && (
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-primary hover:underline"
                            >
                              View on Google Maps
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <social.icon className="h-6 w-6 text-primary" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="075 112 3543" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <select 
                      id="service" 
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="event">Event Transportation</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="hourly">Hourly Rental</option>
                      <option value="tour">City Tour</option>
                      <option value="other">Other</option>  
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your transportation needs..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-6 opacity-90">
            Call our main line for urgent transportation needs
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 075 112 3543
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hi Aman,

I'm reaching out through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`);
    const mailtoLink = `mailto:yadavaman2282000@gmail.com?subject=${subject}&body=${body}`;
    try {
      // Try to open email client
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_self';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: "Email client opened!",
        description: "Your default email app should open with the message pre-filled."
      });

      // Clear form after successful attempt
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText('yadavaman2282000@gmail.com').then(() => {
        toast({
          title: "Email copied to clipboard!",
          description: "Please email me at yadavaman2282000@gmail.com"
        });
      }).catch(() => {
        toast({
          title: "Please email me directly",
          description: "yadavaman2282000@gmail.com"
        });
      });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleEmailClick = () => {
    try {
      const mailtoLink = 'mailto:yadavaman2282000@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Aman,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards';

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_self';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText('yadavaman2282000@gmail.com').then(() => {
        toast({
          title: "Email copied!",
          description: "yadavaman2282000@gmail.com has been copied to your clipboard."
        });
      }).catch(() => {
        toast({
          title: "Email: yadavaman2282000@gmail.com",
          description: "Please copy this email address manually."
        });
      });
    }
  };
  const handlePhoneClick = () => {
    try {
      const telLink = 'tel:+917340224449';

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = telLink;
      link.target = '_self';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: copy phone number to clipboard
      navigator.clipboard.writeText('+91 7340224449').then(() => {
        toast({
          title: "Phone number copied!",
          description: "+91 7340224449 has been copied to your clipboard."
        });
      }).catch(() => {
        toast({
          title: "Phone: +91 7340224449",
          description: "Please copy this phone number manually."
        });
      });
    }
  };
  const handleLinkedInClick = () => {
    // Replace with your actual LinkedIn URL
    window.open('https://linkedin.com/in/aman-yadav', '_blank');
  };
  const handleGitHubClick = () => {
    // Replace with your actual GitHub URL
    window.open('https://github.com/amanyadav', '_blank');
  };
  return <section id="contact" className="py-24 bg-gradient-to-br from-orange-100 via-red-100 to-orange-150 dark:from-orange-950/30 dark:via-red-950/30 dark:to-orange-950/40 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/5 w-28 h-28 bg-orange-400/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-red-400/15 rounded-full animate-bounce-slow" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-orange-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/5 w-24 h-24 bg-red-300/10 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-36 h-36 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-full blur-xl animate-bounce-slow" style={{
        animationDelay: '2.5s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can 
            bring your ideas to life with cutting-edge technology and AI solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in">
            <Card className="bg-card/80 backdrop-blur-sm border-orange-200/50 dark:border-orange-800/50 shadow-xl shadow-orange-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-card-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={5} className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-inter shadow-lg shadow-orange-500/25 transition-all duration-300" size="lg" disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim()}>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div>
              <h3 className="text-3xl font-playfair font-semibold mb-6 text-foreground">
                Get in touch
              </h3>
              <p className="text-lg text-muted-foreground font-inter mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you need full-stack development, AI/ML solutions, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleEmailClick}>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg flex items-center justify-center border border-orange-200 dark:border-orange-800">
                  <Mail size={24} className="text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-inter">Email</h4>
                  <p className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                    yadavaman2282000@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handlePhoneClick}>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg flex items-center justify-center border border-orange-200 dark:border-orange-800">
                  <Phone size={24} className="text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-inter">Phone</h4>
                  <p className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                    +91 7340224449
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg flex items-center justify-center border border-orange-200 dark:border-orange-800">
                  <MapPin size={24} className="text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-inter">Location</h4>
                  <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-4">
              <h4 className="font-semibold text-foreground font-inter mb-4">
                Quick Contact
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300" onClick={handleEmailClick}>
                  <Mail size={16} className="mr-2" />
                  Email Me
                </Button>
                <Button variant="outline" className="flex-1 border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300" onClick={handlePhoneClick}>
                  <Phone size={16} className="mr-2" />
                  Call Me
                </Button>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground font-inter mb-4">
                Let's connect on social media
              </h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300" onClick={handleEmailClick} title="Send Email">
                  <Mail size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300" onClick={handleLinkedInClick} title="LinkedIn Profile">
                  <Linkedin size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300" onClick={handleGitHubClick} title="GitHub Profile">
                  <Github size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300" onClick={handlePhoneClick} title="Call Now">
                  <Phone size={20} />
                </Button>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="">
              <h4 className="font-semibold text-foreground font-inter mb-2"></h4>
              <p className="text-sm text-muted-foreground"></p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
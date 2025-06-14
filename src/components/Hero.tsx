import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Creative
          </h1>
          <h2 className="text-4xl md:text-6xl font-playfair font-medium mb-8 text-foreground/90">
            Developer
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-inter">
            Crafting exceptional digital experiences with modern technologies and innovative design solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-inter">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-inter">
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Github size={28} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Mail size={28} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown size={32} className="text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};
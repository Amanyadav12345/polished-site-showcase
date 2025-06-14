import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-orange-50 to-red-50 dark:via-orange-950/30 dark:to-red-950/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-400 to-orange-500 opacity-25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-300 to-red-400 opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Creative
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-8 text-foreground/90">
              Developer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-inter leading-relaxed">
              Crafting exceptional digital experiences with modern technologies and innovative design solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-in">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-inter shadow-lg shadow-orange-500/25">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-inter">
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors duration-300">
                <Github size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors duration-300">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors duration-300">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 p-2 shadow-2xl shadow-orange-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 flex items-center justify-center text-3xl font-bold text-orange-600 dark:text-orange-400 border-4 border-white dark:border-orange-950/50">
                  Your Photo
                </div>
              </div>
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-br from-red-300 to-orange-400 rounded-full opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-orange-500" />
        </div>
      </div>

    </section>
  );
};
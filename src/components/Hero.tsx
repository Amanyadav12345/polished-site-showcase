import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
export const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 dark:from-orange-950/20 dark:via-red-950/20 dark:to-orange-950/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-400/15 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-red-400/20 rounded-full animate-bounce-slow" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-20 h-20 bg-orange-300/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-red-300/15 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/12 w-16 h-16 bg-orange-500/20 rounded-full animate-bounce-slow" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-red-500/25 rounded-full animate-float" style={{
        animationDelay: '1.5s'
      }}></div>
        
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-400/25 to-orange-500/25 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-300/15 to-red-400/15 rounded-full blur-3xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-left animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">Software</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-8 text-foreground/90">
              Developer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-inter leading-relaxed">Results-driven Full Stack Developer with extensive experience delivering 10+ end-to-end client projects across diverse industries. Proficient in integrating AI and machine learning models into production-ready applications. Skilled in a wide range of frontend technologies including React, Angular, and backend frameworks such as Java (Spring Boot) and Python. Adept at building scalable, secure, and high-performance systems with a deep understanding of both software architecture and user experience.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-in">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-inter shadow-lg shadow-orange-500/25">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-inter">
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-8 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
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
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative">
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-3xl bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 p-2 shadow-2xl shadow-orange-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Avatar className="w-full h-full rounded-2xl border-4 border-white dark:border-orange-950/50">
                  <AvatarImage 
                    src={isDark 
                      ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                      : "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
                    } 
                    alt="Profile" 
                    className="object-cover" 
                  />
                  <AvatarFallback className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 text-3xl font-bold text-orange-600 dark:text-orange-400">
                    CD
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-80 animate-float" style={{
              animationDelay: '2s'
            }}></div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-br from-red-300 to-orange-400 rounded-full opacity-60 animate-float" style={{
              animationDelay: '4s'
            }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-orange-500" />
        </div>
      </div>

    </section>;
};
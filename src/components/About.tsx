import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Heart, Lightbulb, Rocket, Star } from "lucide-react";

export const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "TailwindCSS", "Framer Motion", "AWS", "Docker", "GraphQL", "MongoDB"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 dark:from-orange-950/20 dark:via-red-950/20 dark:to-orange-950/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-red-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in order-2 lg:order-1">
            <div className="relative group">
              {/* Main photo container with enhanced styling */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-3xl p-3 shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 flex items-center justify-center text-2xl font-bold text-orange-600 dark:text-orange-400 border-4 border-white dark:border-orange-950/50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop&crop=face" 
                    alt="Professional headshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating cartoon elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -top-4 -right-12 w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-18 h-18 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-12 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute top-1/2 -left-16 w-14 h-14 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow" style={{ animationDelay: '2s' }}>
                <Coffee className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute top-1/4 -right-16 w-12 h-12 bg-gradient-to-br from-red-300 to-orange-300 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              {/* Animated text content */}
              <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
                <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
                  <p className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent font-semibold text-xl mb-4">
                    Hey there! 👋
                  </p>
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience creating 
                    beautiful, functional, and user-centered digital experiences. I combine technical 
                    expertise with creative problem-solving to deliver exceptional results.
                  </p>
                </div>
                
                <div className="animate-slide-in" style={{ animationDelay: '0.7s' }}>
                  <p>
                    My journey began with a curiosity for how things work, which led me to explore 
                    the intersection of design and technology. Today, I specialize in building 
                    scalable web applications that not only look great but perform flawlessly.
                  </p>
                </div>
                
                <div className="animate-slide-in" style={{ animationDelay: '0.9s' }}>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 my-8 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <Card className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border-orange-200 dark:border-orange-800 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 border-red-200 dark:border-red-800 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Done</div>
                  </CardContent>
                </Card>
              </div>

              {/* Skills section */}
              <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.3s' }}>
                <h3 className="text-2xl font-playfair font-semibold mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-inter bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 animate-slide-in border border-orange-200 dark:border-orange-800"
                      style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
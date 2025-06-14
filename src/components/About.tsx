import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "TailwindCSS", "Framer Motion", "AWS", "Docker", "GraphQL", "MongoDB"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop&crop=face" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-foreground">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating 
                beautiful, functional, and user-centered digital experiences. I combine technical 
                expertise with creative problem-solving to deliver exceptional results.
              </p>
              <p>
                My journey began with a curiosity for how things work, which led me to explore 
                the intersection of design and technology. Today, I specialize in building 
                scalable web applications that not only look great but perform flawlessly.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-foreground">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-inter bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
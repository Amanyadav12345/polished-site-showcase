import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform with multiple templates, export options, and collaboration features.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "D3.js", "Node.js", "Weather API"],
      github: "#",
      live: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Personal fitness application with workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, dark mode, and content management system.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["Next.js", "Framer Motion", "Sanity", "Vercel"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 dark:from-red-950/10 dark:via-orange-950/10 dark:to-red-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-400/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-red-400/15 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-20 h-20 bg-orange-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-red-300/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/12 w-16 h-16 bg-orange-500/15 rounded-full animate-bounce-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-red-500/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-red-400/15 to-orange-500/15 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-orange-200/50 dark:border-orange-800/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-background/90 text-foreground hover:bg-background">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-card-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-inter">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-orange-400/30 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
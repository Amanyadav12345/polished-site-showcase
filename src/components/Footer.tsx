import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950/40 dark:to-red-950/40 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-12 h-12 bg-red-400/15 rounded-full animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-2">
              Let's create something amazing together
            </h3>
            <p className="text-muted-foreground font-inter">
              Ready to bring your ideas to life? Let's talk.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-inter flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-orange-500 dark:text-orange-400" /> by Your Name © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
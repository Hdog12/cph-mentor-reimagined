import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="MentoringCPH Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-serif font-bold text-primary">MentoringCPH</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#resources" className="text-foreground hover:text-primary transition-colors font-medium">
            Resources
          </a>
          <a href="#mentoring" className="text-foreground hover:text-primary transition-colors font-medium">
            Mentoring
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Demo
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
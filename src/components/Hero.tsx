import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-background to-muted"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
          🚀 125 Questions + 2 Full Mock Exam Sets Available Now!
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
          Math AI SL Revision Resources
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Nervous about your IB Maths Exams? Let us help you! Comprehensive revision materials, expert videos, and practice questions created by experienced IB tutors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://docs.google.com/spreadsheets/d/1C2nGNYV4nyfJ1TysAODarNmNPZMzKMMNj6lwM7VFJ4Q/template/preview" target="_blank" rel="noopener noreferrer">
              Get Free Revision Sheet
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://forms.gle/AFtZh2kuE52CwUdSA" target="_blank" rel="noopener noreferrer">
              Try Demo for FREE
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
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
          🚀 Just Launched! 125 Exam-style Questions + 2 Full Mock Exam Sets
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
          Math AI SL Revision Resources
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Nervous about your IB Maths Exams? Let us help you excel with comprehensive revision materials, expert videos, and practice questions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Free Revision Sheet
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Try Demo for FREE
          </Button>
        </div>
      </div>
    </section>
  );
};
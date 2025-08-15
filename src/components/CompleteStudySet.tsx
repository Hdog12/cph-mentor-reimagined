import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Euro, Trophy, Shield } from "lucide-react";

export const CompleteStudySet = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Complete Study Set
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to pass Math AI SL! Get access to ALL revision videos and exam-style questions.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto shadow-lg border-accent/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-accent text-accent-foreground">BEST VALUE</Badge>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl font-bold text-muted-foreground line-through">€138</span>
                <span className="text-5xl font-bold text-primary">€99</span>
                <Badge variant="destructive" className="text-sm">Save 28%</Badge>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-accent" />
                <span className="text-lg">
                  <strong>Get access to ALL revision videos and Exam-Style Questions</strong>
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Euro className="h-6 w-6 text-accent" />
                <span className="text-lg">
                  Special Offer: €99 (save 28%)
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-accent" />
                <span className="text-lg">
                  Everything you need to pass Math AI SL!
                </span>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-accent/10 rounded-lg">
                <Shield className="h-6 w-6 text-accent mt-1" />
                <div>
                  <Badge className="mb-2 bg-green-100 text-green-800">PASSING GUARANTEE</Badge>
                  <p className="text-lg font-semibold">
                    If you do not pass your Maths final with this package, we refund you the complete cost!
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full text-lg py-6" asChild>
              <a href="https://buy.stripe.com/bIY17edZY72602QdR3" target="_blank" rel="noopener noreferrer">
                Get Complete Study Set - €99
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
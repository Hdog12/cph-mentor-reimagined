import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, FileText, GraduationCap, Tag, PartyPopper } from "lucide-react";
import examImage from "@/assets/exam-questions.jpg";

export const ExamQuestions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Math AI SL Exam-Style Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice with authentic exam-style questions developed by seasoned IB tutors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Rocket className="h-6 w-6 text-accent" />
              <span className="text-lg">
                <strong>125 Exam-style Questions + 2 Mock Exam Sets</strong>
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-accent" />
              <span className="text-lg">
                Exam-style questions that students typically struggle with
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              <span className="text-lg">
                Developed by seasoned IB tutors
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Tag className="h-6 w-6 text-accent" />
              <span className="text-lg">
                <strong>Price: €69</strong>
              </span>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-accent/10 rounded-lg">
              <PartyPopper className="h-6 w-6 text-accent mt-1" />
              <div>
                <Badge className="mb-2">FREE DEMO</Badge>
                <p className="text-lg">
                  Try Demo for FREE: 2 Videos + 5 exam-style questions at no cost!
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <a href="https://buy.stripe.com/00gbLS7BAcmqeXK3cs" target="_blank" rel="noopener noreferrer">
                  Get Exam Style Questions
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="flex-1" asChild>
                <a href="https://forms.gle/AFtZh2kuE52CwUdSA" target="_blank" rel="noopener noreferrer">
                  Get FREE Demo!
                </a>
              </Button>
            </div>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <img 
                src={examImage} 
                alt="Exam Questions Preview" 
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
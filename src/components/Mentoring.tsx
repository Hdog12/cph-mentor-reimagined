import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Award } from "lucide-react";

export const Mentoring = () => {
  return (
    <section className="py-20 bg-muted/30" id="mentoring">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Need Personalised Help? We also offer private mentoring!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">What We Do</h3>
            <p className="text-lg text-muted-foreground">
              We provide online 1-to-1 tutoring for Math AI and AA students. As current engineering students, 
              we understand that no one knows what it's like to be a student better than the students themselves. 
              That's what gives us the edge in tailoring our approaches to your learning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-lg">1-to-1 personalized tutoring sessions</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-6 w-6 text-accent" />
                <span className="text-lg">Taught by engineering students at DTU</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-accent" />
                <span className="text-lg">200+ hours of IB Maths tutoring experience</span>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="mailto:info@mentoringcph.com" target="_blank" rel="noopener noreferrer">
                Contact Us for Tutoring
              </a>
            </Button>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Who We Are</h3>
              <p className="text-muted-foreground mb-4">
                Hi, we're Frederik and Javier, we're two engineering students from the Technical University of Denmark (DTU) 
                and we would love to help you reach your potential in maths! Apart from creating the Revision Videos and 
                Exam-style Questions, we also have 200+ hours of IB Maths Tutoring experience.
              </p>
              <p className="text-muted-foreground">
                As IB graduates and engineering students, we understand the frustration that comes from not understanding 
                what is being taught, and as experienced tutors, we know how to help students overcome that frustration 
                and mentor them to success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Gift } from "lucide-react";
import revisionImage from "@/assets/revision-sheet.jpg";

export const RevisionSheet = () => {
  return (
    <section className="py-20 bg-background" id="resources">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Free Math AI SL Revision Sheet
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-accent" />
                <span className="text-lg">Outlines every concept you need to know for the exams</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span className="text-lg">Includes Personal Study Tracker</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Gift className="h-6 w-6 text-accent" />
                <span className="text-lg font-semibold">Completely Free</span>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8">
              Get Revision Sheet
            </Button>
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <img 
                src={revisionImage} 
                alt="Math AI SL Revision Sheet Preview" 
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
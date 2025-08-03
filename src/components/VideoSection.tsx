import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Video, Lightbulb, Euro, PartyPopper } from "lucide-react";
import videoImage from "@/assets/video-preview.jpg";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Math AI SL Revision Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video coverage of the entire Math AI SL syllabus, created by experienced IB tutors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={videoImage} 
                  alt="Video Preview" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Video className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-accent" />
              <span className="text-lg">
                <strong>One video per subtopic (26 videos) - 9 hours of content</strong>
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Video className="h-6 w-6 text-accent" />
              <span className="text-lg">
                Specifically tailored to cover the entire Math AI SL syllabus
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Lightbulb className="h-6 w-6 text-accent" />
              <span className="text-lg">
                Explicitly state and explain what the IB expects you to know
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Euro className="h-6 w-6 text-accent" />
              <span className="text-lg">
                €69 for all videos; €3 for a singular video of your choice
              </span>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-accent/10 rounded-lg">
              <PartyPopper className="h-6 w-6 text-accent mt-1" />
              <div>
                <Badge className="mb-2">FREE DEMO</Badge>
                <p className="text-lg">
                  Try Demo for FREE: 2 Videos + 5 exam-style questions
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                Get Access to All Videos (€69)
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Get One Video (€3)
              </Button>
            </div>
            
            <Button variant="secondary" size="lg" className="w-full">
              Get FREE Demo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
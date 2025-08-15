import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "The revision videos really helped me understand concepts I was struggling with. Got a 6 in my final exam!",
      author: "Emma K.",
      rating: 5
    },
    {
      text: "Amazing exam-style questions that were so similar to what came up in my actual exam. Definitely recommend!",
      author: "Lucas M.",
      rating: 5
    },
    {
      text: "The complete study set was worth every penny. The passing guarantee gave me confidence to invest in my education.",
      author: "Sophie L.",
      rating: 5
    },
    {
      text: "Frederik and Javier are excellent tutors. Their explanations are clear and easy to follow.",
      author: "Alex P.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Hear what fellow students have to say about our resources!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
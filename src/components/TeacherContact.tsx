import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const TeacherContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    schoolName: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        schoolName: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Are you a teacher?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to collaborate with schools. Reach out to discuss resources, bulk access, or feedback.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="your.email@school.edu"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="schoolName">School Name</Label>
              <Input
                id="schoolName"
                name="schoolName"
                type="text"
                required
                value={formData.schoolName}
                onChange={handleInputChange}
                className="h-12"
                placeholder="Your school or institution"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message / Inquiry</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[120px] resize-none"
                placeholder="Tell us about your needs, questions, or how we can collaborate..."
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 h-12 text-lg font-semibold transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
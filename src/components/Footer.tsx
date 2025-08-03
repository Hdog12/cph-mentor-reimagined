import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="MentoringCPH Logo" className="h-10 w-10" />
              <h3 className="text-2xl font-serif font-bold">MentoringCPH</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Professional IB Math AI SL revision resources to help students excel in their mathematics exams. 
              Comprehensive videos, practice questions, and study materials created by experienced IB tutors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Free Revision Sheet</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Video Courses</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Exam Questions</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Mock Exams</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Mentoring</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Free Demo</a></li>
              <li><a href="#" className="hover:text-primary-foreground">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 MentoringCPH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
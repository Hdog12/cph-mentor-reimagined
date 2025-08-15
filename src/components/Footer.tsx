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
              <li><a href="https://docs.google.com/spreadsheets/d/1C2nGNYV4nyfJ1TysAODarNmNPZMzKMMNj6lwM7VFJ4Q/template/preview" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">Free Revision Sheet</a></li>
              <li><a href="https://buy.stripe.com/14keY4aNMcmq8zmaES" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">Video Courses</a></li>
              <li><a href="https://buy.stripe.com/00gbLS7BAcmqeXK3cs" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">Exam Questions</a></li>
              <li><a href="https://forms.gle/AFtZh2kuE52CwUdSA" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">Free Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="mailto:info@mentoringcph.com" className="hover:text-primary-foreground">info@mentoringcph.com</a></li>
              <li><a href="tel:+4522228314" className="hover:text-primary-foreground">+45 22 22 83 14</a></li>
              <li><a href="tel:+4552119692" className="hover:text-primary-foreground">+45 52 11 96 92</a></li>
              <li><a href="https://drive.google.com/file/d/11sNyNx4URC0iaPCP2-7LAnogyVaqr7v5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">Terms & Conditions</a></li>
              <li><a href="https://drive.google.com/file/d/1UXKHCBEadbgW2dtMV30e3PJQk445nFuQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">Passing Guarantee</a></li>
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
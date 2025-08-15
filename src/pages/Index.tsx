import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RevisionSheet } from "@/components/RevisionSheet";
import { VideoSection } from "@/components/VideoSection";
import { ExamQuestions } from "@/components/ExamQuestions";
import { CompleteStudySet } from "@/components/CompleteStudySet";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Mentoring } from "@/components/Mentoring";
import { TeacherContact } from "@/components/TeacherContact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RevisionSheet />
        <VideoSection />
        <ExamQuestions />
        <CompleteStudySet />
        <Testimonials />
        <FAQ />
        <Mentoring />
        <TeacherContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

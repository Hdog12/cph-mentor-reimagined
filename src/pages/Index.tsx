import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RevisionSheet } from "@/components/RevisionSheet";
import { VideoSection } from "@/components/VideoSection";
import { ExamQuestions } from "@/components/ExamQuestions";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;

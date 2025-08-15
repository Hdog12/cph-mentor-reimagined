import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is Mentoring CPH and who is it for?",
      answer: "We are former IB students and experienced tutors on a mission to create the IB Math AI SL resources we wish we had when we were studying. Our packages — with revision videos, exam‑style questions, and full mock exams — are tailored to the syllabus and help students achieve clear understanding and better results."
    },
    {
      question: "What is included in each package?",
      answer: "Revision Videos Package: 26 videos covering every sub-topic in the Math AI SL syllabus. Explains everything the IB expects you to know.\n\nExam-style Questions Package: 125 topic-wise exam-style questions + 2 mock exam sets. All questions are modelled to follow the format that the IB uses in official exams.\n\nComplete Study Set: All videos and questions. Essentially, this is exam-style questions package + revision videos package. It includes everything you need to succeed in Math AI SL."
    },
    {
      question: "Do the resources cover the full syllabus?",
      answer: "Yes. All our revision videos, exam‑style questions, and mock exams are created to cover every topic in the IB Math AI SL syllabus."
    },
    {
      question: "Can schools use this resource for all their students?",
      answer: "Yes. We offer school‑wide access so teachers can share the resources with every IB Math AI SL student in their program. If you are a teacher interested in this option, please contact us — you can find our contact details and a contact form at the bottom of this page."
    },
    {
      question: "How do I get access to the resources once I have paid?",
      answer: "Upon payment, you will redirected to a short google form. once you submit it (takes <30s), you'll be automatically granted access to the resources you purchased. You can then access everything directly through the revision sheet, where all videos and questions are hyperlinked in the right places :)"
    },
    {
      question: "What is the \"passing guarantee\"?",
      answer: "If you have purchased the complete study set and still fail your Math AI SL exams, we will refund you the complete cost of the complete study set. You can learn more about it at the bottom of the page by clicking on \"Mentoring CPH Passing Guarantee\""
    },
    {
      question: "Can I share the resources?",
      answer: "Sharing anything other than the free revision sheet goes against our terms & conditions. If caught sharing, you will lose access to the resources you purchased and will be charged a fine."
    }
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
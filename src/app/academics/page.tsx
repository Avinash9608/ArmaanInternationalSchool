import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Target, Lightbulb, Users, CheckSquare, Calendar, Download, Award, HeartHandshake, Phone } from "lucide-react";

const teachingMethods = [
    {
        icon: Lightbulb,
        title: "Inquiry-Based Learning",
        description: "We encourage students to ask questions and explore topics, fostering curiosity and a deeper understanding of subjects."
    },
    {
        icon: Target,
        title: "Project-Based Activities",
        description: "Students engage in hands-on projects that require them to apply knowledge and collaborate with their peers."
    },
    {
        icon: Users,
        title: "Collaborative Learning",
        description: "Group activities and discussions are integral to our teaching, helping students learn from one another."
    }
]

const academicSections = [
    {
        icon: Users,
        title: "Class Structure",
        description: "We maintain a small teacher-student ratio to ensure personalized attention. Our classes are structured to be interactive, encouraging participation from every student.",
        image: "https://placehold.co/600x400.png",
        imageHint: "interactive classroom"
    },
    {
        icon: CheckSquare,
        title: "Assessment and Evaluation",
        description: "Our assessment methods are comprehensive, combining periodic tests, assignments, and project work to evaluate a student's understanding and progress throughout the year.",
        image: "https://placehold.co/600x400.png",
        imageHint: "student writing exam"
    },
    {
        icon: Award,
        title: "Academic Achievements",
        description: "We celebrate the academic achievements of our students, who consistently excel in various competitions and examinations, bringing laurels to the school.",
        image: "https://placehold.co/600x400.png",
        imageHint: "students receiving awards"
    },
    {
        icon: HeartHandshake,
        title: "Support Services",
        description: "We offer dedicated support services, including academic counseling and special attention for students who need it, to ensure no one is left behind.",
        image: "https://placehold.co/600x400.png",
        imageHint: "teacher helping student"
    }
]

const headerImages = [
    { src: "https://placehold.co/1920x400.png", hint: "students library" },
    { src: "https://placehold.co/1920x400.png", hint: "science lab" },
    { src: "https://placehold.co/1920x400.png", hint: "classroom discussion" },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics"
        description="Discover our comprehensive curriculum and innovative teaching methodologies."
        images={headerImages}
      />

      {/* Curriculum Overview */}
      <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary">
                Curriculum Overview
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our curriculum for Classes 1 to 8 is aligned with national educational standards (CBSE framework), while incorporating modern pedagogical approaches. We focus on building a strong foundation in core subjects like Mathematics, Science, English, and Social Studies. Additionally, we offer programs in arts, music, physical education, and computer literacy to ensure a well-rounded education.
              </p>
               <p className="mt-4 text-muted-foreground">
                We regularly update our curriculum to keep pace with the evolving educational landscape and to meet the needs of our students in the 21st century.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Students in a classroom"
                data-ai-hint="classroom students studying"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Teaching Methods</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We employ a variety of teaching strategies to make learning engaging, effective, and fun.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {teachingMethods.map((method, index) => (
                    <Card key={index} className="text-center p-8 bg-card/80 backdrop-blur-sm">
                        <div className="flex justify-center">
                           <div className="bg-accent/20 p-4 rounded-full">
                                <method.icon className="w-8 h-8 text-accent-foreground" />
                           </div>
                        </div>
                        <h3 className="font-headline mt-4 text-xl font-semibold text-primary">{method.title}</h3>
                        <p className="mt-2 text-muted-foreground">{method.description}</p>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* Alternating Feature Sections */}
       <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm space-y-16">
          {academicSections.map((section, index) => (
            <div key={index} className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-4">
                     <section.icon className="w-8 h-8 text-primary" /> {section.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{section.description}</p>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    data-ai-hint={section.imageHint}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Resources</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Download our academic calendar and class-wise syllabus.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6 flex flex-col sm:flex-row items-center gap-6 bg-card/80 backdrop-blur-sm">
                    <Calendar className="w-12 h-12 text-accent-foreground flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold text-primary">Academic Calendar</h3>
                        <p className="text-muted-foreground mt-1">View important dates for the academic year.</p>
                    </div>
                    <Button asChild className="mt-4 sm:mt-0 sm:ml-auto bg-gradient-to-r from-accent to-sky-400 text-accent-foreground hover:from-accent/90 hover:to-sky-400/90">
                        <Link href="#"><Download className="mr-2 h-4 w-4" /> Download</Link>
                    </Button>
                </Card>
                <Card className="p-6 flex flex-col sm:flex-row items-center gap-6 bg-card/80 backdrop-blur-sm">
                    <BookOpen className="w-12 h-12 text-accent-foreground flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl font-semibold text-primary">Syllabus</h3>
                        <p className="text-muted-foreground mt-1">Access study materials for each class.</p>
                    </div>
                    <Button asChild className="mt-4 sm:mt-0 sm:ml-auto bg-gradient-to-r from-accent to-sky-400 text-accent-foreground hover:from-accent/90 hover:to-sky-400/90">
                        <Link href="#"><Download className="mr-2 h-4 w-4" /> View All</Link>
                    </Button>
                </Card>
            </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Frequently Asked Questions</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">What curriculum does the school follow?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              We are aligned with the CBSE curriculum, focusing on a holistic approach to education that balances academics with extracurricular activities.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">What is the teacher-student ratio?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              We pride ourselves on maintaining a low teacher-student ratio to ensure that every child receives personalized attention and guidance.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">How are parents informed about their child's progress?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              We conduct regular Parent-Teacher Meetings and provide detailed progress reports. Parents can also schedule meetings with teachers for specific concerns.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">Do you offer support for students with special needs?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              Yes, we have a dedicated support team that works with students who require special educational assistance to help them achieve their full potential.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </div>
          </div>
      </section>

       {/* Contact CTA */}
       <section className="py-16 bg-primary/90">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h2 className="text-3xl font-headline font-bold">Have More Questions?</h2>
            <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Our academic team is here to help. Feel free to get in touch for any academic-related queries.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact"><Phone className="mr-2 h-5 w-5"/> Contact Us</Link>
            </Button>
        </div>
       </section>
    </>
  );
}

import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen, Target, Lightbulb } from "lucide-react";

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
        icon: BookOpen,
        title: "Personalized Attention",
        description: "Our small class sizes ensure that every student receives the individual support they need to succeed."
    }
]

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics"
        description="Discover our comprehensive curriculum and innovative teaching methodologies."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="students library"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary">
                Curriculum Overview
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our curriculum for Classes 1 to 8 is aligned with national educational standards while incorporating modern pedagogical approaches. We focus on building a strong foundation in core subjects like Mathematics, Science, English, and Social Studies. Additionally, we offer programs in arts, music, physical education, and computer literacy to ensure a well-rounded education.
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

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Teaching Methods</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We employ a variety of teaching strategies to make learning engaging, effective, and fun.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {teachingMethods.map((method, index) => (
                    <Card key={index}>
                        <CardHeader className="items-center text-center">
                            <div className="bg-accent/20 p-4 rounded-full">
                                <method.icon className="w-8 h-8 text-accent-foreground" />
                            </div>
                            <CardTitle className="font-headline mt-4">{method.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground">{method.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}

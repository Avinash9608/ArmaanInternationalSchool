import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Library, Tv, Microscope, Gamepad2, Brush, ShieldCheck } from "lucide-react";

const facilities = [
  {
    icon: Library,
    title: "Library & Digital Resources",
    description: "A vast collection of books and digital resources to support learning and research.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school library"
  },
  {
    icon: Tv,
    title: "Smart Classrooms",
    description: "Equipped with modern technology to make learning interactive and engaging.",
    image: "https://placehold.co/600x400.png",
    imageHint: "smart classroom"
  },
  {
    icon: Microscope,
    title: "Science Labs",
    description: "Well-equipped labs for practical experiments in Physics, Chemistry, and Biology.",
    image: "https://placehold.co/600x400.png",
    imageHint: "science laboratory"
  },
  {
    icon: Gamepad2,
    title: "Sports Facilities",
    description: "Spacious grounds for various sports like cricket, football, and athletics.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school sports ground"
  },
  {
    icon: Brush,
    title: "Arts & Music Rooms",
    description: "Dedicated spaces for students to explore their creativity in art and music.",
    image: "https://placehold.co/600x400.png",
    imageHint: "art class"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    description: "CCTV surveillance and trained security personnel ensure a safe environment.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school gate security"
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Our Facilities"
        description="Explore the state-of-the-art infrastructure at Armaan International School."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="school infrastructure"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden group">
                 <div className="overflow-hidden">
                    <Image
                        src={facility.image}
                        alt={facility.title}
                        data-ai-hint={facility.imageHint}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                 </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    {facility.icon && <facility.icon className="w-8 h-8 text-accent-foreground" />}
                    <CardTitle className="font-headline">{facility.title}</CardTitle>
                  </div>
                  <p className="mt-4 text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

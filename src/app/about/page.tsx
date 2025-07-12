import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Award, BookOpen, Eye, HeartHandshake, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
    { icon: Star, title: "Academic Excellence" },
    { icon: BookOpen, title: "Creativity and Innovation" },
    { icon: ShieldCheck, title: "Integrity and Honesty" },
    { icon: HeartHandshake, title: "Respect and Empathy" },
    { icon: Award, title: "Responsibility and Accountability" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about our mission, vision, and the people behind Armaan International School."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="school campus"
      />
      
      {/* Welcome Message */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="flex justify-center md:col-span-1">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Principal of Armaan International School"
                  data-ai-hint="school principal portrait"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-headline font-bold text-primary">
                  Welcome from the Principal
                </h2>
                <blockquote className="mt-4 text-lg text-muted-foreground italic border-l-4 border-accent pl-4">
                  "Welcome to Armaan International School, where we strive for excellence in education and character building. It is my privilege to lead this remarkable institution and be a part of our students' journey towards a brighter future."
                </blockquote>
                <p className="mt-4 font-bold text-primary text-right">- Ms. Anjali Sharma, Principal</p>
              </div>
            </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                       <Eye className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">Our Vision</h2>
                </div>
                <p className="mt-4 text-muted-foreground">Our vision is to be a leading educational institution, recognized for our commitment to academic excellence, innovative teaching practices, and holistic development of students.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                       <Star className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">Our Mission</h2>
                </div>
                <p className="mt-4 text-muted-foreground">Our mission is to provide a nurturing environment that fosters academic excellence, creativity, and personal growth, empowering students to become responsible global citizens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-bold text-primary">
                Our History
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded with the vision to provide quality education in Sonmai, Armaan International School has grown into a center of excellence. We are proud of our journey and the milestones we have achieved in creating a positive and impactful learning community.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="School campus"
                data-ai-hint="school building"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Core Values</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    The principles that guide our community and educational philosophy.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {values.map((value, index) => (
                    <div key={index} className="text-center flex flex-col items-center">
                        <div className="bg-card p-4 rounded-full shadow-md">
                           <value.icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <h4 className="mt-4 font-headline font-semibold text-primary">{value.title}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="School staff"
                data-ai-hint="teachers group photo"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary">
                Our Dedicated Team
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our team of experienced and passionate educators is the backbone of our school. They are committed to creating a supportive and engaging learning environment for every student, guiding them to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Accreditation */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold text-primary">Facilities & Accreditation</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              We provide state-of-the-art infrastructure and are proud to be affiliated with national educational boards, ensuring the highest standards of quality and learning.
            </p>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              <Link href="/facilities">Explore Our Facilities</Link>
            </Button>
        </div>
      </section>

    </>
  );
}

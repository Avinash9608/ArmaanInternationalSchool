import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about our mission, vision, and the people behind Armaan International School."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="school campus"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-bold text-primary">
                Our History and Mission
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded with the vision to provide quality education in Sonmai, Armaan International School has grown into a center of excellence. Our mission is to cultivate a love for learning, develop strong character, and prepare students to be responsible global citizens. We believe in a holistic approach, balancing rigorous academics with enriching extracurricular activities.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our core values of integrity, respect, and perseverance guide everything we do, creating a safe and inspiring atmosphere for all students.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="School campus"
                data-ai-hint="school campus building"
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
          <Card className="p-8 md:p-12 border-none shadow-lg">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="flex justify-center md:col-span-1">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Principal of Armaan International School"
                  data-ai-hint="school principal portrait"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-headline font-bold text-primary">
                  Principal's Message
                </h2>
                <blockquote className="mt-4 text-lg text-muted-foreground italic border-l-4 border-accent pl-4">
                  "It is my privilege to lead this remarkable institution. At Armaan International, we are committed to providing an educational experience that is both challenging and supportive. Our dedicated faculty and staff work tirelessly to create opportunities for our students to excel academically, creatively, and personally. We welcome you to join our school community and be a part of our journey towards a brighter future."
                </blockquote>
                <p className="mt-4 font-bold text-primary text-right">- Ms. Anjali Sharma, Principal</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

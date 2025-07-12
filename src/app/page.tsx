import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Dribbble, Building } from "lucide-react";

// Components for different sections
function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src="/hero-background.jpg"
        alt="Armaan International School campus"
        data-ai-hint="school building students"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
          Empowering Young Minds
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          Join us at Armaan International School to embark on a journey of knowledge, growth, and excellence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            <Link href="/admissions">Admissions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Welcome to Armaan International School
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a community dedicated to providing a nurturing environment that fosters academic excellence, creativity, and personal growth for students from Class 1 to Class 8.
            </p>
            <p className="mt-4 text-muted-foreground">
              "Welcome to Armaan International School, where we strive for excellence in education and character building."
            </p>
            <p className="mt-4 font-bold text-primary">- Principal's Message</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Principal of Armaan International School"
              data-ai-hint="school principal"
              width={400}
              height={400}
              className="rounded-full shadow-lg w-64 h-64 md:w-96 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: GraduationCap,
    title: "Academics",
    description: "Our curriculum is designed to challenge and inspire students, promoting critical thinking and a love for learning.",
    image: "https://placehold.co/600x400.png",
    imageHint: "classroom students",
  },
  {
    icon: Building,
    title: "Facilities",
    description: "We offer modern infrastructure, including smart classrooms, a well-stocked library, and science labs.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school building",
  },
  {
    icon: Dribbble,
    title: "Extracurriculars",
    description: "From sports to arts and clubs, we provide a wide range of activities to help students explore their passions.",
    image: "https://placehold.co/600x400.png",
    imageHint: "kids sports",
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Key Features</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing a holistic education that goes beyond the classroom.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <Image
                src={feature.image}
                alt={feature.title}
                data-ai-hint={feature.imageHint}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="flex-row items-center gap-4">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const newsItems = [
    { title: "Annual Sports Day 2024", date: "August 15, 2024", image: "https://placehold.co/600x400.png", imageHint: "kids running race" },
    { title: "Science Fair Winners Announced", date: "August 10, 2024", image: "https://placehold.co/600x400.png", imageHint: "science project" },
    { title: "Parent-Teacher Meeting Schedule", date: "August 5, 2024", image: "https://placehold.co/600x400.png", imageHint: "meeting" },
];

function NewsSection() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Latest News & Events</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">Stay updated with our school's latest happenings and achievements.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <Card key={index} className="flex flex-col">
                            <Image src={item.image} alt={item.title} data-ai-hint={item.imageHint} width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" />
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                                <h3 className="mt-2 text-lg font-headline font-semibold text-primary">{item.title}</h3>
                                <Button variant="link" asChild className="p-0 mt-auto self-start text-accent-foreground hover:text-primary">
                                  <Link href="#">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const testimonials = [
  {
    quote: "Armaan International School has been a great platform for my child's growth. The teachers are incredibly supportive and the environment is very positive.",
    name: "Aarav's Parent",
    image: "https://placehold.co/100x100.png",
    imageHint: "happy parent",
  },
  {
    quote: "I love my school! We learn so many new things and have a lot of fun with sports and art classes. My friends and teachers are the best.",
    name: "Priya, Class 5",
    image: "https://placehold.co/100x100.png",
    imageHint: "happy student",
  },
  {
    quote: "The focus on both academics and extracurriculars is what makes this school stand out. We are proud to be part of the Armaan family.",
    name: "Rohan's Parent",
    image: "https://placehold.co/100x100.png",
    imageHint: "smiling family",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">What Our Community Says</h2>
          <p className="mt-2 text-lg text-muted-foreground">Words from our students and parents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-center">
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    data-ai-hint={testimonial.imageHint}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <p className="mt-4 font-headline font-semibold text-primary">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
    return (
        <section className="bg-primary">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-headline font-bold text-primary-foreground">Ready to Join Us?</h2>
                <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                    Take the next step in your child's educational journey. Explore our admission process or get in touch with our team.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/admissions">Admissions Inquiry</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <NewsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

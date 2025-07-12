
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Dribbble, Building } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Students learning in a classroom",
    hint: "classroom students",
    title: "Empowering Young Minds",
    description: "Join us at Armaan International School to embark on a journey of knowledge, growth, and excellence.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1681248156475-f95f078846d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "School library with students reading",
    hint: "school library",
    title: "A World of Knowledge Awaits",
    description: "Our well-stocked library and digital resources foster a love for reading and research."
  },
  {
    src: "https://images.unsplash.com/photo-1441034281545-78296c3a6934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Students playing sports on the field",
    hint: "kids sports day",
    title: "Nurturing Talent Beyond Academics",
    description: "We believe in holistic development through a rich extracurricular program."
  },
];

function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full flex items-center justify-center text-center">
                <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    fill
                    className="object-cover brightness-50"
                    priority={index === 0}
                  />
                <div className="relative z-10 text-white container mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg animate-fade-in-down">
                    {image.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md animate-fade-in-up">
                    {image.description}
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-gradient-to-r from-accent to-sky-400 text-accent-foreground hover:from-accent/90 hover:to-sky-400/90">
                      <Link href="/about">Learn More</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                      <Link href="/admissions">Admissions</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}


function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
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
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Principal of Armaan International School"
              data-ai-hint="school principal"
              width={400}
              height={400}
              className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
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
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3Nyb29tfGVufDB8fDB8fHww",
    imageHint: "classroom students",
  },
  {
    icon: Building,
    title: "Facilities",
    description: "We offer modern infrastructure, including smart classrooms, a well-stocked library, and science labs.",
    image: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    imageHint: "school building",
  },
  {
    icon: Dribbble,
    title: "Extracurriculars",
    description: "From sports to arts and clubs, we provide a wide range of activities to help students explore their passions.",
    image: "https://plus.unsplash.com/premium_photo-1673814842168-ed452b1f0b99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaW50aW5nfGVufDB8fDB8fHww",
    imageHint: "kids sports painting",
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Key Features</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing a holistic education that goes beyond the classroom.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 bg-card/80 backdrop-blur-sm">
              <Image
                src={feature.image}
                alt={feature.title}
                data-ai-hint={feature.imageHint}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="flex-row items-center gap-4">
                 <div className="p-2 bg-gradient-to-br from-accent to-sky-400 rounded-lg text-accent-foreground">
                    <feature.icon className="w-8 h-8" />
                 </div>
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
    { title: "Annual Sports Day 2024", date: "August 15, 2024", image: "https://plus.unsplash.com/premium_photo-1661605536374-4fe49a2da521?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwZGF5fGVufDB8fDB8fHww", imageHint: "kids running race" },
    { title: "Science Fair Winners Announced", date: "August 10, 2024", image: "https://plus.unsplash.com/premium_photo-1683140893042-af3aa516ae40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGZhaXJ8ZW58MHx8MHx8fDA%3D", imageHint: "science project" },
    { title: "Parent-Teacher Meeting Schedule", date: "August 5, 2024", image: "https://images.unsplash.com/photo-1728138127500-fb73c1313f76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBhcmVudCUyMHRlYWNoZXIlMjBtZWV0aW5nfGVufDB8fDB8fHww", imageHint: "meeting" },
];

function NewsSection() {
    return (
        <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Latest News & Events</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">Stay updated with our school's latest happenings and achievements.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm">
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
    image: "https://images.unsplash.com/photo-1629360057380-18b15b42e650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBhcmVudHxlbnwwfHwwfHx8MA%3D%3D",
    imageHint: "happy parent",
  },
  {
    quote: "I love my school! We learn so many new things and have a lot of fun with sports and art classes. My friends and teachers are the best.",
    name: "Priya, Class 5",
    image: "https://plus.unsplash.com/premium_photo-1683133977483-6dde45c80599?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fFBhcmVudHxlbnwwfHwwfHx8MA%3D%3D",
    imageHint: "happy student",
  },
  {
    quote: "The focus on both academics and extracurriculars is what makes this school stand out. We are proud to be part of the Armaan family.",
    name: "Rohan's Parent",
    image: "https://plus.unsplash.com/premium_photo-1681909713812-c43e48cd3762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fFBhcmVudHxlbnwwfHwwfHx8MA%3D%3D",
    imageHint: "smiling family",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">What Our Community Says</h2>
          <p className="mt-2 text-lg text-muted-foreground">Words from our students and parents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-center bg-card/80 backdrop-blur-sm">
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
        <section className="bg-primary/90">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-headline font-bold text-primary-foreground">Ready to Join Us?</h2>
                <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                    Take the next step in your child's educational journey. Explore our admission process or get in touch with our team.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-gradient-to-r from-accent to-sky-400 text-accent-foreground hover:from-accent/90 hover:to-sky-400/90">
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

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { Library, Tv, Microscope, Gamepad2, Brush, ShieldCheck, Bus, Utensils, Presentation, Home, BedDouble } from "lucide-react";

const facilities = [
  {
    icon: Tv,
    title: "Smart Classrooms",
    description: "Our classrooms are equipped with modern technology, including smart boards and projectors, to make learning interactive and engaging. The furniture is designed for comfort and collaboration.",
    image: "https://placehold.co/600x400.png",
    imageHint: "smart classroom"
  },
  {
    icon: Library,
    title: "Library & Digital Resources",
    description: "Our library houses a vast collection of books, journals, and digital resources to support learning and research. It offers quiet study areas for students to focus and learn.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school library"
  },
  {
    icon: Microscope,
    title: "Science & Computer Labs",
    description: "We have well-equipped labs for practical experiments in Physics, Chemistry, and Biology, along with modern computer labs to foster IT skills.",
    image: "https://placehold.co/600x400.png",
    imageHint: "science laboratory"
  },
  {
    icon: Gamepad2,
    title: "Sports & Recreation",
    description: "Spacious grounds for various outdoor sports like cricket and football, complemented by indoor facilities for games like table tennis, encouraging a healthy and active lifestyle.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school sports ground"
  },
    {
    icon: Presentation,
    title: "Auditorium & Event Spaces",
    description: "Our school features a large auditorium with modern audio-visual equipment, serving as a venue for school assemblies, events, and performances.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school auditorium stage"
  },
  {
    icon: Utensils,
    title: "Cafeteria & Dining",
    description: "The school cafeteria provides nutritious and hygienic food options in a clean and welcoming dining area for students and staff.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school cafeteria"
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "We offer safe and reliable bus services covering various routes. All our buses are equipped with safety features and are monitored to ensure student security.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school bus"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    description: "The entire campus is under CCTV surveillance, and we have trained security personnel to ensure a safe and secure environment for our students at all times.",
    image: "https://placehold.co/600x400.png",
    imageHint: "school gate security"
  },
  {
    icon: Home,
    title: "Tuition Classes for Kids",
    description: "We provide high-quality tuition classes conducted by experienced teachers in a comfortable home environment. We offer focused attention and cover all major subjects. Timings: 3:00 PM to 5:00 PM and 6:00 PM to 8:00 PM.",
    image: "https://placehold.co/600x400.png",
    imageHint: "home tuition"
  },
  {
    icon: BedDouble,
    title: "Hostel Facility",
    description: "We also offer a secure and well-maintained hostel for students, featuring nutritious meals, comfortable accommodation, daily study support, a hygienic environment, and 24x7 supervision and care.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hostel room"
  },
];

const headerImages = [
    { src: "https://placehold.co/1920x400.png", hint: "school infrastructure" },
    { src: "https://placehold.co/1920x400.png", hint: "library shelves" },
    { src: "https://placehold.co/1920x400.png", hint: "sports complex" },
]

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Our Facilities"
        description="Explore the state-of-the-art infrastructure at Armaan International School, designed to provide a conducive learning environment."
        images={headerImages}
      />

      <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A World-Class Learning Environment</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We are committed to providing students with top-notch facilities that support a comprehensive and holistic educational experience.
                </p>
            </div>
            <div className="space-y-20">
            {facilities.map((facility, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center p-8 rounded-lg bg-card/80 backdrop-blur-sm shadow-lg">
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                   <Image
                      src={facility.image}
                      alt={facility.title}
                      data-ai-hint={facility.imageHint}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl w-full object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-accent/20 p-3 rounded-full">
                           <facility.icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">{facility.title}</h3>
                    </div>
                  <p className="text-muted-foreground text-lg">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { PageHeader } from "@/components/page-header";
import { GalleryClient } from "@/components/gallery-client";

const galleryImages = {
  events: [
    { src: "https://placehold.co/600x400.png", alt: "Annual day celebration", description: "Students performing a dance during the Annual Day celebrations.", imageHint: "stage performance kids" },
    { src: "https://placehold.co/600x400.png", alt: "Sports day event", description: "A thrilling moment from the track and field events on Sports Day.", imageHint: "kids sports day" },
    { src: "https://placehold.co/600x400.png", alt: "School assembly", description: "The entire school gathered for the morning assembly.", imageHint: "school assembly students" },
    { src: "https://placehold.co/400x600.png", alt: "Art exhibition", description: "Creative artworks from our students displayed at the annual art exhibition.", imageHint: "children art" },
  ],
  academics: [
    { src: "https://placehold.co/400x600.png", alt: "Students in science lab", description: "Students engaged in a practical experiment in the chemistry lab.", imageHint: "students science lab" },
    { src: "https://placehold.co/600x400.png", alt: "Classroom learning", description: "An interactive learning session in progress in a Grade 4 classroom.", imageHint: "teacher classroom" },
    { src: "https://placehold.co/400x600.png", alt: "Library reading session", description: "Students enjoying their reading time in the school library.", imageHint: "students reading library" },
    { src: "https://placehold.co/600x400.png", alt: "Computer lab session", description: "Students learning programming basics in the computer lab.", imageHint: "kids computer lab" },
  ],
  sports: [
    { src: "https://placehold.co/600x400.png", alt: "Cricket match", description: "An intense moment during an inter-house cricket match.", imageHint: "kids playing cricket" },
    { src: "https://placehold.co/600x400.png", alt: "Basketball practice", description: "The school basketball team during their practice session.", imageHint: "students basketball" },
    { src: "https://placehold.co/400x600.png", alt: "Yoga session", description: "Students participating in a morning yoga session for health and wellness.", imageHint: "kids yoga" },
    { src: "https://placehold.co/600x400.png", alt: "Chess competition", description: "Students concentrating during a chess competition.", imageHint: "children chess" },
  ],
};

const galleryVideos = {
  videos: [
    { src: "https://placehold.co/600x400.png", alt: "School Tour", description: "A virtual tour of Armaan International School's campus and facilities.", imageHint: "school campus video" },
    { src: "https://placehold.co/600x400.png", alt: "Principal's Message", description: "A welcome message from our principal.", imageHint: "principal speech" },
    { src: "https://placehold.co/600x400.png", alt: "Annual Day Highlights", description: "Highlights from our spectacular Annual Day function.", imageHint: "school event video" },
    { src: "https://placehold.co/600x400.png", alt: "Student Testimonials", description: "Hear what our students have to say about their experience.", imageHint: "student interview" },
  ],
};


export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A glimpse into the vibrant life at Armaan International School."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="photo collage"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <GalleryClient galleries={galleryImages} videos={galleryVideos} />
        </div>
      </section>
    </>
  );
}

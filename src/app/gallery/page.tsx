import { PageHeader } from "@/components/page-header";
import Image from "next/image";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Annual day celebration", imageHint: "stage performance kids" },
  { src: "https://placehold.co/400x600.png", alt: "Students in science lab", imageHint: "students science lab" },
  { src: "https://placehold.co/600x400.png", alt: "Sports day event", imageHint: "kids sports day" },
  { src: "https://placehold.co/600x400.png", alt: "Art exhibition", imageHint: "children art" },
  { src: "https://placehold.co/400x600.png", alt: "Library reading session", imageHint: "students reading library" },
  { src: "https://placehold.co/600x400.png", alt: "School assembly", imageHint: "school assembly students" },
  { src: "https://placehold.co/600x400.png", alt: "Classroom learning", imageHint: "teacher classroom" },
  { src: "https://placehold.co/600x400.png", alt: "Computer lab session", imageHint: "kids computer lab" },
];

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
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

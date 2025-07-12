"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Image {
  src: string;
  alt: string;
  description: string;
  imageHint: string;
}

interface GalleryClientProps {
  galleries: {
    [key: string]: Image[];
  };
}

export function GalleryClient({ galleries }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openImage = (image: Image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:w-auto md:grid-cols-3 mx-auto mb-12">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
        </TabsList>
        
        {Object.entries(galleries).map(([category, images]) => (
          <TabsContent key={category} value={category}>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid cursor-pointer" onClick={() => openImage(image)}>
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
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && closeImage()}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <>
            <DialogHeader>
                <DialogTitle>{selectedImage.alt}</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video w-full">
                 <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
            </div>
            <DialogDescription>
                {selectedImage.description}
            </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

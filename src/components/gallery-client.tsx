"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

interface MediaItem {
  src: string;
  alt: string;
  description: string;
  imageHint: string;
}

interface GalleryClientProps {
  galleries: {
    [key: string]: MediaItem[];
  };
  videos: {
    [key: string]: MediaItem[];
  }
}

export function GalleryClient({ galleries, videos }: GalleryClientProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isImage, setIsImage] = useState(true);

  const openMedia = (item: MediaItem, type: 'image' | 'video') => {
    setSelectedMedia(item);
    setIsImage(type === 'image');
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const allTabs = { ...galleries, ...videos };

  return (
    <>
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mx-auto mb-12 h-auto">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        
        {Object.entries(galleries).map(([category, images]) => (
          <TabsContent key={category} value={category}>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid cursor-pointer" onClick={() => openMedia(image, 'image')}>
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

        {Object.entries(videos).map(([category, videoItems]) => (
           <TabsContent key={category} value={category}>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {videoItems.map((video, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg break-inside-avoid cursor-pointer group" onClick={() => openMedia(video, 'video')}>
                  <Image
                    src={video.src}
                    alt={video.alt}
                    data-ai-hint={video.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                    <PlayCircle className="h-12 w-12 sm:h-16 sm:w-16 text-white text-opacity-80" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedMedia} onOpenChange={(isOpen) => !isOpen && closeMedia()}>
        <DialogContent className="max-w-3xl">
          {selectedMedia && (
            <>
            <DialogHeader>
                <DialogTitle>{selectedMedia.alt}</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                 {isImage ? (
                    <Image
                        src={selectedMedia.src}
                        alt={selectedMedia.alt}
                        fill
                        className="object-contain"
                    />
                 ) : (
                    <div className="text-white text-center">
                       <PlayCircle className="h-24 w-24 mx-auto mb-4" />
                       <p>Video playback is not available in this demo.</p>
                       <p className="text-sm text-muted-foreground">This is a placeholder for a video player.</p>
                    </div>
                 )}
            </div>
            <DialogDescription>
                {selectedMedia.description}
            </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

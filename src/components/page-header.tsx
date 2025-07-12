"use client";

import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface PageHeaderImage {
  src: string;
  hint: string;
}

interface PageHeaderProps {
  title: string;
  description: string;
  images: PageHeaderImage[];
}

export function PageHeader({ title, description, images }: PageHeaderProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

  return (
    <section className="relative h-64 md:h-80 w-full flex items-center justify-center text-center text-white bg-slate-800">
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="h-full">
            {images.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src={image.src}
                            alt={title}
                            data-ai-hint={image.hint}
                            fill
                            className="absolute inset-0 object-cover brightness-50"
                            priority={index === 0}
                        />
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
}

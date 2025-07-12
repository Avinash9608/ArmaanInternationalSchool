import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export function PageHeader({ title, description, imageUrl, imageHint }: PageHeaderProps) {
  return (
    <section className="relative h-64 md:h-80 w-full flex items-center justify-center text-center text-white bg-slate-800">
      <Image
        src={imageUrl}
        alt={title}
        data-ai-hint={imageHint}
        fill
        className="absolute inset-0 object-cover opacity-30 dark:opacity-20"
      />
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

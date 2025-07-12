
"use client";

import Link from "next/link";
import { Menu, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function AppHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomeAndTop = pathname === '/' && !isScrolled;
  const headerClasses = cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card shadow-md" : "bg-transparent",
  );
  
  const linkClasses = cn(
    "font-medium text-sm lg:text-base transition-colors",
    isHomeAndTop 
      ? "text-white hover:text-white/80" 
      : "text-primary hover:text-primary/80",
    isHomeAndTop && "drop-shadow-sm"
  );
  
  const logoAndMenuClasses = cn(
    "transition-colors",
    isHomeAndTop 
      ? "text-white"
      : "text-primary",
  );
  
  const mobileMenuButtonClasses = cn(
    isHomeAndTop 
      ? "text-white hover:bg-white/20"
      : "text-primary hover:bg-accent"
  );


  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className={cn("flex items-center gap-2", logoAndMenuClasses)} onClick={() => setIsOpen(false)}>
          <School className="h-8 w-8" />
          <span className="text-xl font-headline font-bold">
            Armaan International
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-x-6">
          <nav className="flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  linkClasses,
                  pathname === link.href && !isHomeAndTop && "font-bold underline underline-offset-4"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={mobileMenuButtonClasses}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
               <div className="flex-shrink-0 mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <School className="h-8 w-8 text-primary" />
                    <span className="text-xl font-headline font-bold text-primary">
                      Armaan International
                    </span>
                  </Link>
                </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium text-foreground hover:text-primary transition-colors py-2 rounded-md",
                      pathname === link.href ? "text-primary font-bold bg-muted" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

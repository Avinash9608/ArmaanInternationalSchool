
"use client";

import Link from "next/link";
import { Menu, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColorClass = "text-primary";
  const textHoverClass = "hover:text-sky-600";
  const activeLinkClass = "text-sky-600 font-bold";
  const textShadowClass = isScrolled ? "" : "drop-shadow-sm";

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card shadow-md" : "bg-transparent"
    )}>
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <School className={cn("h-8 w-8", textColorClass, textShadowClass)} />
          <span className={cn(
            "text-xl font-headline font-bold",
            textColorClass,
            textShadowClass
          )}>
            Armaan International
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-x-8">
          <nav className="flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium text-sm lg:text-base transition-colors",
                  textColorClass,
                  textHoverClass,
                  textShadowClass,
                  pathname === link.href && activeLinkClass
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(textColorClass, "hover:bg-accent")}>
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
                      "text-lg font-medium text-foreground hover:text-sky-500 transition-colors py-2 rounded-md",
                      pathname === link.href ? "text-sky-500 font-bold bg-muted" : ""
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

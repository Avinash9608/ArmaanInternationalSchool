import Link from "next/link";
import { School, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
];

const otherLinks = [
    { href: "/facilities", label: "Facilities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
];

export function AppFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <School className="h-8 w-8" />
              <span className="text-xl font-headline font-bold">
                Armaan International
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering young minds for a brighter future. Located in Sonmai, Bihar.
            </p>
          </div>

          <div className="md:justify-self-start">
            <h3 className="font-headline font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-start">
            <h3 className="font-headline font-semibold uppercase tracking-wider">More Links</h3>
            <ul className="mt-4 space-y-2">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">Armaan International School, Sonmai, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+911234567890" className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">(+91) 123-456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@armaaninternational.com" className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground">info@armaaninternational.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60 text-center sm:text-left">
            © {new Date().getFullYear()} Armaan International School. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" aria-label="Facebook" className="text-primary-foreground/60 hover:text-primary-foreground"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Twitter" className="text-primary-foreground/60 hover:text-primary-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Instagram" className="text-primary-foreground/60 hover:text-primary-foreground"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

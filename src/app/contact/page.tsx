import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin } from "lucide-react";

const headerImages = [
    { src: "https://placehold.co/1920x400.png", hint: "contact us banner" },
    { src: "https://placehold.co/1920x400.png", hint: "reception desk" },
    { src: "https://placehold.co/1920x400.png", hint: "school front office" },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with us for any inquiries."
        images={headerImages}
      />
      <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    <Card className="bg-card/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="font-headline">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-card/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="font-headline">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Address</h4>
                                    <p className="text-muted-foreground">Armaan International School, Sonmai, Bihar, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary">(+91) 123-456-7890</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:info@armaaninternational.com" className="text-muted-foreground hover:text-primary">info@armaaninternational.com</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="aspect-video w-full">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57924.89311352227!2d85.93922655610813!3d24.8143924773289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f37573756f7e81%3A0x868b357364188f17!2sSonmai%2C%20Bihar%20811316!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google map location of Armaan International School"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

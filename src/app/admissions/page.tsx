import { PageHeader } from "@/components/page-header";
import { AdmissionsForm } from "@/components/admissions-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, FileText, UserPlus, Calendar, CreditCard, Download, Phone, HelpCircle } from "lucide-react";

const processSteps = [
    { icon: FileText, title: "Submit Online Inquiry", description: "Fill out the online inquiry form with your child's and your details. This is the first step to express your interest." },
    { icon: UserPlus, title: "School Visit & Interaction", description: "We will invite you for a school tour and a friendly interaction session to get to know you and your child." },
    { icon: Check, title: "Admission Confirmation", description: "After the interaction and review of preliminary details, admission will be offered based on seat availability." }
];

const requiredDocuments = [
    "Student's Birth Certificate",
    "Previous Year's Report Card (if applicable)",
    "Transfer Certificate from previous school (if applicable)",
    "Student's Photograph (Passport-size)",
    "Parent/Guardian's Photograph",
    "Address Proof",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        description="Join the Armaan International School family. Here’s how to get started."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="children school entrance"
      />

      {/* Main Content: Form and Process */}
      <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
                <AdmissionsForm />
            </div>
            <div className="lg:col-span-1 space-y-8">
                 <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="font-headline">Admission Process</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {processSteps.map((step, index) => (
                           <div key={index} className="flex gap-4">
                               <div className="flex-shrink-0 bg-gradient-to-br from-primary to-sky-800 text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center">
                                   <step.icon className="h-5 w-5" />
                               </div>
                               <div>
                                   <h4 className="font-semibold text-primary">{step.title}</h4>
                                   <p className="text-sm text-muted-foreground">{step.description}</p>
                               </div>
                           </div>
                       ))}
                    </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="font-headline">Admission Brochure</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground mb-4">Download our brochure for detailed information about our school and the admission process.</p>
                       <Button asChild className="w-full bg-gradient-to-r from-accent to-sky-400 text-accent-foreground hover:from-accent/90 hover:to-sky-400/90">
                            <Link href="#"><Download className="mr-2"/> Download Brochure</Link>
                       </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16 md:py-24 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Admission Criteria */}
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3 text-xl sm:text-2xl"><FileText/> Admission Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Admissions are open for Classes 1 to 8. Admission is granted based on the following:</p>
                    <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
                        <li>Availability of seats in the respective class.</li>
                        <li>Child's performance in a simple entrance assessment.</li>
                        <li>Interaction with the child and parents.</li>
                        <li>Age eligibility for the applied grade.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3 text-xl sm:text-2xl"><FileText/> Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">Please keep the following documents ready at the time of admission confirmation:</p>
                    <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
                        {requiredDocuments.map((doc, index) => (
                           <li key={index}>{doc}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Fees and Payment */}
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3 text-xl sm:text-2xl"><CreditCard/> Fees & Payment</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Details regarding the fee structure (admission fee, tuition fees, etc.) will be provided during the school visit and interaction session. We offer multiple payment options for your convenience.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Frequently Asked Questions</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">What is the first step of the admission process?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                             The first step is to fill out the Online Admission Inquiry form available on this page. This expresses your interest, and our admissions team will then contact you to guide you through the next steps.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">Are there any specific age requirements for admission?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              Yes, we follow age criteria as per the CBSE guidelines for admission into each class. Specific age requirements will be discussed during the interaction session.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">Do you have an entrance test for all classes?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                             We conduct a simple, age-appropriate assessment to understand the child's foundational knowledge. It is not a formal test but an interaction to gauge the student's learning level.
                          </AccordionContent>
                      </AccordionItem>
                       <AccordionItem value="item-4">
                          <AccordionTrigger className="font-headline text-lg text-left no-underline hover:no-underline">How can I track the status of my application?</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              Once you submit the online inquiry, our admissions team will be in regular contact with you via phone and email to update you on the status and next steps.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </div>
          </div>
      </section>

       {/* Contact CTA */}
       <section className="py-16 bg-primary/90">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h2 className="text-3xl font-headline font-bold">Have More Questions?</h2>
            <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Our admissions team is here to help. Feel free to get in touch for any admission-related queries.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact"><Phone className="mr-2 h-5 w-5"/> Contact Us</Link>
            </Button>
        </div>
       </section>
    </>
  );
}

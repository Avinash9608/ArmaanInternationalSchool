import { PageHeader } from "@/components/page-header";
import { AdmissionsForm } from "@/components/admissions-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileText, UserPlus } from "lucide-react";

const processSteps = [
    { icon: FileText, title: "Submit Inquiry", description: "Fill out the online inquiry form with your child's and your details." },
    { icon: UserPlus, title: "School Visit & Interaction", description: "We will invite you for a school tour and a friendly interaction session." },
    { icon: Check, title: "Admission Confirmation", description: "Once the formalities are complete, we will confirm the admission." }
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        description="Join the Armaan International School family. Here’s how to get started."
        imageUrl="https://placehold.co/1920x400.png"
        imageHint="children school entrance"
      />
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
                <AdmissionsForm />
            </div>
            <div className="lg:col-span-1">
                <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline">Admission Process</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {processSteps.map((step, index) => (
                           <div key={index} className="flex gap-4">
                               <div className="flex-shrink-0 bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center">
                                   <step.icon className="h-5 w-5" />
                               </div>
                               <div>
                                   <h4 className="font-semibold text-primary">{step.title}</h4>
                                   <p className="text-sm text-muted-foreground">{step.description}</p>
                               </div>
                           </div>
                       ))}
                       <div className="pt-4 border-t">
                           <h4 className="font-semibold text-primary">Admission Criteria</h4>
                           <p className="mt-2 text-sm text-muted-foreground">Admissions are open for Classes 1 to 8, subject to availability of seats. Admission is granted based on the child's performance in a simple entrance assessment and interaction.</p>
                       </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </>
  );
}

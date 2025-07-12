"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitAdmission } from "@/app/admissions/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const initialState = {
  message: "",
  errors: {},
  isSuccess: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

export function AdmissionsForm() {
  const [state, formAction] = useFormState(submitAdmission, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.isSuccess) {
       toast({
        title: "Submission Error",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.isSuccess && formRef.current) {
      formRef.current.reset();
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Online Admission Inquiry</CardTitle>
        <CardDescription>Fill out the form below to begin the admission process. No document uploads required at this stage.</CardDescription>
      </CardHeader>
      <CardContent>
        {state.isSuccess ? (
             <div className="flex flex-col items-center justify-center text-center space-y-4 p-8 bg-green-50 rounded-lg">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="text-2xl font-headline font-bold text-green-800">Inquiry Submitted!</h3>
                <p className="text-green-700">{state.message}</p>
             </div>
        ) : (
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student's Full Name</Label>
                <Input id="studentName" name="studentName" required />
                {state.errors?.studentName && <p className="text-sm text-destructive">{state.errors.studentName[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" name="dob" type="date" required />
                {state.errors?.dob && <p className="text-sm text-destructive">{state.errors.dob[0]}</p>}
              </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="grade">Applying for Grade</Label>
                <Select name="grade" required>
                    <SelectTrigger id="grade">
                        <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from({ length: 8 }, (_, i) => i + 1).map(grade => (
                            <SelectItem key={grade} value={`Class ${grade}`}>Class {grade}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {state.errors?.grade && <p className="text-sm text-destructive">{state.errors.grade[0]}</p>}
            </div>
             <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian's Name</Label>
                <Input id="parentName" name="parentName" required />
                {state.errors?.parentName && <p className="text-sm text-destructive">{state.errors.parentName[0]}</p>}
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" required />
                 {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required />
                {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <Textarea id="address" name="address" required />
              {state.errors?.address && <p className="text-sm text-destructive">{state.errors.address[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.isSuccess) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.isSuccess && formRef.current) {
        formRef.current.reset();
    }
  }, [state, toast]);

  if (state.isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 p-8 bg-green-50 rounded-lg h-full min-h-[480px]">
         <CheckCircle className="h-16 w-16 text-green-500" />
         <h3 className="text-2xl font-headline font-bold text-green-800">Message Sent!</h3>
         <p className="text-green-700">{state.message}</p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" name="name" required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Your Email</Label>
        <Input id="email" name="email" type="email" required />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required />
        {state.errors?.subject && <p className="text-sm text-destructive">{state.errors.subject[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}

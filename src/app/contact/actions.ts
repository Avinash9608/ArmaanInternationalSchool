"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  // Here you would typically send an email.
  console.log("Contact Form Received:", validatedFields.data);
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for contacting us! We have received your message and will get back to you soon.",
    errors: {},
    isSuccess: true,
  };
}

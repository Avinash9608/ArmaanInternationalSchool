"use server";

import { z } from "zod";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  grade: z.string().min(1, "Grade is required"),
  parentName: z.string().min(2, "Parent name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
});

export async function submitAdmission(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    studentName: formData.get("studentName"),
    dob: formData.get("dob"),
    grade: formData.get("grade"),
    parentName: formData.get("parentName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just simulate a success response.
  console.log("Admission Inquiry Received:", validatedFields.data);
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you! Your admission inquiry has been submitted successfully. We will contact you shortly.",
    errors: {},
    isSuccess: true,
  };
}

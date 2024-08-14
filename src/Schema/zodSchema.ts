import * as z from "zod";

const contactUsSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).max(50),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string()
        .min(10, { message: "Phone number must be 10 digits" })
        .max(10, { message: "Phone number must be 10 digits" })
        .regex(/^[0-9]+$/, { message: "Phone number should be a number" }),
    message: z.string().min(1, { message: "Message is required" }),
});

type formValues = z.infer<typeof contactUsSchema>;



const postSchema = z.object({
    title: z.string().min(1, { message: "Name is required" }).max(50),
    content: z.string().min(1, { message: "Quote is required" }),
});

type postValues = z.infer<typeof postSchema>;

export { contactUsSchema,postSchema };
export type { formValues, postValues };

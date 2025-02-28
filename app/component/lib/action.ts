"use server";
import { z } from "zod";
const uploadSchema = z.object({
  title: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "image is required" })
    .refine((file) => file.type.startsWith("image/"),{message: "only image are allowed "}
});

export const uploadImage = async (formData: FormData) => {
  console.log(formData);
};

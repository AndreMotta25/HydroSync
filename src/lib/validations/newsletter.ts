import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string({ message: "Campo obrigatório" })
    .email("E-mail inválido")
    .toLowerCase(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

import { z } from "zod";

export default function useAuthValidator({ emai, password, name, type }) {
  if (type == "login") {
    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string.min(6),
    });
    return loginSchema.parse({ emai, password });
  } else if (type == "signup") {
    const signUpSchema = z.object({
      email: z.string().email,
      password: z.string().min(6),
      name: z.string().min(3),
    });
    return signUpSchema.parse({ emai, password, name });
  }
}

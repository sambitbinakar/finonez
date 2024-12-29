import { z } from "zod";


export const accountSChema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.enum(["CURRENT","SAVINGS"]),
    balance: z.string().min(1,"Initial balance is required"),
    isDefault: z.boolean().default(false),
})
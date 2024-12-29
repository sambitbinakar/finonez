import { PrismaClient } from '@prisma/client'

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db
}

// globalThis.prisma:This global variable ensures that the prisma client insatnce is
//reused accross hot reloads during development . Without this, each time your application
//reload , a new instance of prisma client would be created ,potentially leading

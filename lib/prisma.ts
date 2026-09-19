import { PrismaClient } from "../app/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma =
    globalForPrisma.prisma ||
    new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma as PrismaClient;
}

export { prisma };
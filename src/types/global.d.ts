import { PrismaClient } from '../generated/prisma'

declare global {
  var prisma: PrismaClient | undefined
}
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const { DB_APP_USER, DB_APP_PASSWORD, DB_HOST, DB_PORT, APP_DB_NAME } = process.env

const connectionString = `postgresql://${DB_APP_USER}:${DB_APP_PASSWORD}@${DB_HOST}:${DB_PORT}/${APP_DB_NAME}`

const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prismaClient = new PrismaClient({ adapter })

export { prismaClient as prisma }

// npx prisma db pull
// npx prisma generate

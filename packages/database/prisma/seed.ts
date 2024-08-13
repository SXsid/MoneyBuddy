import { PrismaClient, transStatus } from '@prisma/client'
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

async function main() {
  
  const aman = await prisma.user.upsert({
    where: { number: '8003592767' },
    update: {},
    create: {
      number: '8003592767',
      password: 'harsh',
      name: "harsh",
      transection: {
        create: {
          time: new Date(),
          status: transStatus.success,
          amount: 20000,
          token: await bcrypt.hash("aman",10),
          provider: "HDFC Bank",
        },
      },
    },
  })
  // const aman = await prisma.transection.create({
    
  //   data: {
  //       userId: "288f4543-6f62-4229-a52a-9ebd288b6319",
  //       time:new Date(),
  //       provider:"idfc bank",
  //       amount:4234234,
  //       status:transStatus.failed,
  //       token:"849232"
  //     },
    
  // })
  const harsh = await prisma.user.upsert({
    where: { number: '9999999998' },
    update: {},
    create: {
      number: '9999999998',
      password: 'bob',
      name: 'bob',
      transection: {
        create: {
          time: new Date(),
          status: transStatus.failed,
          amount: 2000,
          token: await bcrypt.hash("harsh",10),
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ aman, harsh })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import { PrismaClient, transStatus } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
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
          token: "5641654",
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
  const bob = await prisma.user.upsert({
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
          token: "115445",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ alice, bob })
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
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  await prisma.configuracion.create({
    data: {
      nombre_empresa: "Empresa Demo",
      ruc: "1234567890",
      razon_social: "Empresa Demo S.A."
    }
  })

  await prisma.conexionHKA.createMany({
    data: [
      {
        ambiente: "demo",
        token_empresa: "TOKENEMPRESA",
        token_password: "TOKENPASSWORD",
        url_base: "https://demoemision.thefactoryhka.com.pa/ws/obj/v1.0/Service.svc",
        activo: true
      },
      {
        ambiente: "produccion",
        token_empresa: "",
        token_password: "",
        url_base: "https://emision.thefactoryhka.com.pa/ws/obj/v1.0/Service.svc",
        activo: false
      }
    ]
  })
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

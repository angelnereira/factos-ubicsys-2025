import { prisma } from './prisma'

export const getConexionActiva = () =>
  prisma.conexionHKA.findFirst({ where: { activo: true } })

export const getConfiguracion = () =>
  prisma.configuracion.findFirst()

export const crearFactura = (data: any) =>
  prisma.factura.create({
    data: {
      ...data,
      items: { create: data.items }
    },
    include: { items: true }
  })

export const logHKA = (data: any) =>
  prisma.hKALog.create({ data })

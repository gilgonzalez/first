import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 


  await prisma.task.deleteMany(); // delete * from task

  // const task = await prisma.task.create( {
  //   data: {
  //     name: 'Inventario',
  //     description: 'Realizar el inventario mensual. Mes (Junio)',
  //     completed: true
  //   }
  // } );

  await prisma.task.createMany({
    data : [
      {
        name: 'Inventario',
        description: 'Realizar el inventario mensual. Mes (Junio)',
        completed: true
      },
      {
        name: 'Planilla',
        description: 'Realizar la planilla de pagos. Mes (Junio)',
        completed: false
      },
      {
        name: 'Nomina',
        description: 'Realizar la nomina. Mes (Junio)',
        completed: false
      },

    ]
  })

  return NextResponse.json({message:'Seed executed'});
}
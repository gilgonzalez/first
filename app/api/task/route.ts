import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'
import * as yup from 'yup';
import { deleteTask } from '../../helpers/tasks';

export async function GET(request: Request) { 

  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get('take') || '10');
  const skip = Number(searchParams.get('take') || '0');

  if(isNaN(take)) return NextResponse.json({
    message: 'Bad request: Take is not a number'
  }, {status:400})
  if(isNaN(skip)) return NextResponse.json({
    message: 'Bad request: Skip is not a number'
  }, {status:400})

  const result = await prisma.task.findMany({ take, skip });

  return NextResponse.json({
    data: result
  }, {status: 200});
}

const postSchema = yup.object({
  description :yup.string().required(),
  name: yup.string().required(),
  completed: yup.boolean().optional().default(false)
})


export async function POST(request: Request) { 

  try {
    const {completed, description, name} = await postSchema.validate(await request.json());
    
    const task = await prisma.task.create({
      data: { completed, description, name  }
    });

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error }, { status: 500 });
  }

}

export async function DELETE(request: Request) {

  const deleteTask = await prisma.task.deleteMany({
    where : {
      completed: true
    }
  });
  return NextResponse.json(deleteTask);
}

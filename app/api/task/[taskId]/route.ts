import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Segments {
  params: {
    taskId: string
  }
}

export async function GET(request: Request, segments : Segments) { 

  const {params : {taskId}} = segments;

  if(!taskId){
    return NextResponse.json({
      data: 'Send a task id'
    }, {status: 400});
  }

  const result = await prisma.task.findUnique({
    where : {
      id: taskId
    }
  })

  if(!result){
    return NextResponse.json({
      data: `Task not found: ID --> ${taskId}`
    }, {status: 404});
  }

  return NextResponse.json({
    data: result
  }, {status: 200});
}

const postSchema = yup.object({
  description :yup.string().optional(),
  name: yup.string().optional(),
  completed: yup.boolean().optional().default(false)
})

export async function PUT(request: Request , segments:Segments) { 

  
  try{
    const {completed, description, name} = await postSchema.validate(await request.json());
    const {params:{taskId}} = segments;
    console.log({completed, description, name})
  
    if(!taskId){
      return NextResponse.json({
        data: 'Send a task id'
      }, {status: 400});
    }

    const updatedTask = await prisma.task.update({
      where : {id: taskId},
      data: { completed, description, name  }
    })
    console.log({updatedTask})
    return NextResponse.json(updatedTask);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(error, { status: 400 });
  }

  

  
}
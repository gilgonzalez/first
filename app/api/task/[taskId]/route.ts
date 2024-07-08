import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

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
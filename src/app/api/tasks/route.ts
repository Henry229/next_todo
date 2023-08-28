import { createTask, deleteTask, getAllTasks } from '@/services/task';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return getAllTasks() //
    .then((data) => NextResponse.json(data));
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const text = form.get('text')?.toString();
  const status = form.get('status')?.toString();

  if (!text || !status) {
    return new Response('Bad Request', { status: 400 });
  }

  return createTask(text, status) //
    .then((data) => NextResponse.json(data));
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) {
    return new Response('Bad Request', { status: 400 });
  }

  return deleteTask(id) //
    .then((data) => NextResponse.json(data));
  // return NextResponse.json({ message: 'Topic deleted' }, { status: 200 });
}

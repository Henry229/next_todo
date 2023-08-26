import { createTask } from '@/services/task';
import { NextRequest, NextResponse } from 'next/server';

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

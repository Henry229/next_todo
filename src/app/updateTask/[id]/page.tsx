'use client';

import Modal from '@/components/Modal';
import UpdateTask from '@/components/UpdateTask';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

type Props = {
  params: { id: string };
};

const fetchTaskById = async (id: string) => {
  const response = await fetch(`/api/tasks?id=${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch task');
  }
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function UpdatePage({ params: { id } }: Props) {
  const taskOne = await fetchTaskById(id);
  return <UpdateTask taskOne={taskOne} taskId={id} />;
}

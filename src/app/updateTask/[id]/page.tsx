'use client';

import Modal from '@/components/Modal';
import { getTaskById } from '@/services/task';
import { useRouter } from 'next/navigation';
import { FormEvent, cache, useState } from 'react';

type Props = {
  params: { id: string };
};

const getTheTask = cache(async (id: string) => getTaskById(id));

// eslint-disable-next-line @next/next/no-async-client-component
export default async function UpdatePage({ params: { id } }: Props) {
  const taskOne = await getTheTask(id);
  const { text, status } = taskOne;
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(true);
  const [textEdit, setTextEdit] = useState(text);

  const handleSubmitEditTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/tasks?id=${id}`, { method: 'PUT' });
    if (res.ok) {
      setOpenModalEdit(false);
      router.push('/');
    }
  };

  return (
    <div>
      <Modal
        modalOpen={openModalEdit}
        closeModal={() => openModalEdit && setOpenModalEdit(false)}
      >
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className='text-lg font-bold'>Edit task</h3>
          <div className='modal-action'>
            <input
              className='input input-bordered w-full'
              type='text'
              value={text}
              onChange={(e) => setTextEdit(e.target.value)}
              placeholder='Update Todo..'
            />
            <button type='submit' className='btn'>
              Update
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

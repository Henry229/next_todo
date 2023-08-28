'use client';

import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  params: { id: string };
};

export default function DeletePage({ params: { id } }: Props) {
  console.log('>>> delete page', id);

  const router = useRouter();
  const [openModalDeleted, setOpenModalDeleted] = useState(true);

  const handleDeleteTodo = async (id: string) => {
    const res = await fetch(`/api/tasks?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      setOpenModalDeleted(false);
      router.push('/');
    }
  };

  return (
    <div>
      <Modal
        modalOpen={openModalDeleted}
        closeModal={() => openModalDeleted && setOpenModalDeleted(false)}
      >
        <h3 className='text-lg'>Are you sure to delete this task?</h3>
        <div className='modal_action'>
          <button onClick={() => handleDeleteTodo(id)} className='btn'>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
}

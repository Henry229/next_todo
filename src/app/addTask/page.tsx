'use client';

import { FormEvent, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function AddTaskPage() {
  const router = useRouter();
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [addTask, setAddTask] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setOpenModalAdd(true);

  const handleSubmitAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!addTask) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('text', addTask);
    formData.append('status', 'Active');

    fetch('/api/addTask', { method: 'POST', body: formData }) //
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        // api로 db에 insert가 제대로 이뤄졌다면 홈 경로로 이동한다.
        router.push('/');
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false));

    // setTodos([...todos, todo]);
    setAddTask('');
    // setOpenModalAdd(false);
    // router.refresh();
  };

  const handleCloseModal = () => setOpenModalAdd(false);

  return (
    <section className=''>
      <form onSubmit={handleSubmitAdd}>
        <h3 className='font-bold text-lg'>Add new task</h3>
        <div className='modal-action'>
          <input
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
            type='text'
            placeholder='Add Todo..'
            className='input input-bordered w-full'
          />
          <button type='submit' className='btn'>
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

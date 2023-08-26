'use client';

import { FormEvent, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import GridSpinner from '@/components/ui/GridSpinner';

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
        setAddTask('');
        router.push('/');
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false));

    // setTodos([...todos, todo]);
    // setOpenModalAdd(false);
    // router.refresh();
  };

  const handleCloseModal = () => setOpenModalAdd(false);

  return (
    <section className=''>
      {loading && (
        <div className='absolute inset-0 z-20 text-center pt-[30%] bg-sky-500/20'>
          <GridSpinner />
        </div>
      )}
      {error && (
        <p className='w-full p-4 mb-4 font-bold text-center text-red-600 bg-red-100'>
          {error}
        </p>
      )}
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

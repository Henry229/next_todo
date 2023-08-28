'use client';

import { Todo } from '@/models/todo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import DeleteIcon from '@/components/ui/DeleteIcon';

const getAllTasks = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/tasks', {
      cache: 'no-store',
    });

    // console.log('****res : ', res);
    if (!res.ok) {
      throw new Error('Failed to fetch tasks');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading tasks: ', error);
    return [];
  }
};

// interface TaskListProps {
//   initialTasks: Todo[];
// }

// export async function getServerSideProps() {
//   const tasks = await getAllTasks();
//   console.log('>>>/// tasks : ', tasks);

//   return { props: { initialTasks: tasks } };
// }

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const fetchedTasks = await getAllTasks();
      setTasks(fetchedTasks);
    }
    fetchTasks();
  }, []);

  return (
    <>
      {tasks?.map((t: Todo) => (
        <div
          key={t._id.toString()}
          className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'
        >
          <div>
            <h2 className='font-bold text-2xl'>{t.text}</h2>
            <div>{t.status}</div>
          </div>

          <div className='flex gap-2'>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <Link href={`/deleteTask/${t._id.toString()}`}>
              <DeleteIcon />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

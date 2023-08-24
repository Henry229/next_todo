'use client';

import { FormEvent, useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import AddTaskModal from './AddTaskModal';
import { Todo } from '@/models/todo';
import { TodoList } from './TodoList';
import { addTodo } from '@/api';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo() {
  const router = useRouter();
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [addTask, setAddTask] = useState<string>('');
  const handleOpenModal = () => setOpenModalAdd(true);
  const [todos, setTodos] = useState([
    { id: '123', text: 'Buy milk', status: 'Active' },
    { id: '124', text: 'Shopping', status: 'Active' },
  ]);
  const handleSubmitAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: addTask,
      status: 'Active',
    });
    // setTodos([...todos, todo]);
    setAddTask('');
    setOpenModalAdd(false);
    router.refresh();
  };
  const handleCloseModal = () => setOpenModalAdd(false);

  return (
    <section className=''>
      <button onClick={handleOpenModal} className='btn btn-primary w-full'>
        Add New Task +
      </button>
      <Modal modalOpen={openModalAdd} closeModal={handleCloseModal}>
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
      </Modal>
    </section>
  );
}

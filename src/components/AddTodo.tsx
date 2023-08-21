'use client';

import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import AddTaskModal from './AddTaskModal';
import { Todo } from '@/models/todo';
import { TodoList } from './TodoList';

export default function AddTodo() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const [todos, setTodos] = useState([
    { id: '123', text: 'Buy milk', status: 'active' },
    { id: '124', text: 'Shopping', status: 'Active' },
  ]);
  const handleAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
    setOpenModal(false);
  };

  const handleDelete = (todo: Todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <section className='flex flex-col'>
      <button
        onClick={handleOpenModal}
        className=' bg-indigo-800 text-white py-2'
      >
        Add New Task +
      </button>
      <div className='bg-cyan-600 text-white flex justify-between px-8 py-2 mt-2'>
        <p>Task</p>
        <p>Action</p>
      </div>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              <TodoList
                todoItem={todo}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            </li>
          ))}
      </ul>
      {openModal && (
        <ModalPortal>
          <AddTaskModal onAdd={handleAdd} onClose={() => setOpenModal(false)} />
        </ModalPortal>
      )}
    </section>
  );
}

'use client';

import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import AddTaskModal from './AddTaskModal';

export default function AddTodo() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
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
      {openModal && (
        <ModalPortal>
          <AddTaskModal
            onAdd={() => setOpenModal(false)}
            onClose={() => setOpenModal(false)}
          />
        </ModalPortal>
      )}
    </section>
  );
}

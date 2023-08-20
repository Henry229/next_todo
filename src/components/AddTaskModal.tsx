import { useState } from 'react';
import CloseIcon from './ui/CloseIcon';

type Props = {
  onAdd: () => void;
  onClose: () => void;
};

export default function AddTaskModal({ onAdd, onClose }: Props) {
  const [addTodo, setAddTodo] = useState('');
  return (
    <section className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-neutral-900/70'>
      <div className='w-4/5 h-1/5 bg-white max-w-md'>
        <form action=''>
          <button
            onClick={() => onClose()}
            className='fixed top-0 right-0 p-8 text-gray-900'
          >
            <CloseIcon />
          </button>
          <input
            type='text'
            autoFocus
            placeholder='Add Task...'
            value={addTodo}
            onChange={(e) => setAddTodo(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
    </section>
  );
}

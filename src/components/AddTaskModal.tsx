import { FormEvent, useState } from 'react';
import CloseIcon from './ui/CloseIcon';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@/models/todo';

type Props = {
  onAdd: (todo: Todo) => void;
  onClose: () => void;
};

export default function AddTaskModal({ onAdd, onClose }: Props) {
  const [text, setText] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAdd({ id: uuidv4(), text, status: 'Active' });
  };
  return (
    <section className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-neutral-900/70'>
      <div className='w-4/5 h-1/5 bg-white max-w-md'>
        <button
          onClick={() => onClose()}
          className='fixed top-0 right-0 p-8 text-gray-900'
        >
          <CloseIcon />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            autoFocus
            placeholder='Add Task...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
    </section>
  );
}

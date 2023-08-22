import { FormEvent, useState } from 'react';
import CloseIcon from './ui/CloseIcon';
import { Todo } from '@/models/todo';

type Props = {
  todoUpdate: Todo;
  onUpdate: (todo: Todo) => void;
  onClose: () => void;
};

export default function UPdateTaskModal({
  todoUpdate,
  onUpdate,
  onClose,
}: Props) {
  const [updateText, setUpdateText] = useState(todoUpdate.text);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate({ ...todoUpdate, text: updateText });
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
            placeholder='Update Task...'
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <button>Update</button>
        </form>
      </div>
    </section>
  );
}

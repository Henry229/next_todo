import { Todo } from '@/models/todo';
import DeleteIcon from './ui/DeleteIcon';
import EditIcon from './ui/EditIcon';
import { useState } from 'react';

type Props = {
  task: Todo;
};

export default function Task({ task }: Props) {
  const { id, text, status } = task;
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  return (
    <tr key={id}>
      <td className='w-full'>{text}</td>
      <td className='flex gap-5'>
        <button onClick={() => setOpenModalEdit(true)}>
          <EditIcon />
        </button>
        <button onClick={() => setOpenModalDeleted(true)}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

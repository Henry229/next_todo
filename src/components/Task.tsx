import { Todo } from '@/models/todo';
import DeleteIcon from './ui/DeleteIcon';
import EditIcon from './ui/EditIcon';
import { FormEvent, useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';

type Props = {
  task: Todo;
};

export default function Task({ task }: Props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [text, setText] = useState(task.text);
  // const [status, setStatus] = useState(task.status);
  const { id, text, status } = task;
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [textEdit, setTextEdit] = useState(text);

  const handleSubmitEditTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editTodo({
      id,
      text: textEdit,
      status,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  const handleCloseModal = () => {
    openModalEdit && setOpenModalEdit(false);
    openModalDeleted && setOpenModalDeleted(false);
  };

  return (
    <tr key={id}>
      <td className='w-full text-lg'>{text}</td>
      <td className='flex gap-5'>
        <button onClick={() => setOpenModalEdit(true)}>
          <EditIcon />
        </button>
        <Modal modalOpen={openModalEdit} closeModal={handleCloseModal}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='text-lg font-bold'>Edit task</h3>
            <div className='modal-action'>
              <input
                className='input input-bordered w-full'
                type='text'
                value={textEdit}
                onChange={(e) => setTextEdit(e.target.value)}
                placeholder='Update Todo..'
              />
              <button type='submit' className='btn'>
                Update
              </button>
            </div>
          </form>
        </Modal>
        <button onClick={() => setOpenModalDeleted(true)}>
          <DeleteIcon />
        </button>
        <Modal modalOpen={openModalDeleted} closeModal={handleCloseModal}>
          <h3 className='text-lg'>Are you sure to delete this task?</h3>
          <div className='modal_action'>
            <button onClick={() => handleDeleteTodo(id)} className='btn'>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
}

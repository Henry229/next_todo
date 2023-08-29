import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

type Props = {
  taskOne: { text: string; status: string };
  taskId: string;
};

export default function UpdateTask({ taskOne, taskId }: Props) {
  const router = useRouter();
  const { text, status } = taskOne;
  const [openModalEdit, setOpenModalEdit] = useState(true);
  const [textEdit, setTextEdit] = useState(text);

  const handleSubmitEditTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/tasks?id=${taskId}`, {
      method: 'PUT',
      body: JSON.stringify({ id: taskId, text: textEdit, status }),
    });
    if (res.ok) {
      setOpenModalEdit(false);
      router.push('/');
    }
  };

  return (
    <div>
      <Modal
        modalOpen={openModalEdit}
        closeModal={() => openModalEdit && setOpenModalEdit(false)}
      >
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
    </div>
  );
}

import { Todo } from '@/models/todo';
import DeleteIcon from './ui/DeleteIcon';
import EditIcon from './ui/EditIcon';

type Props = {
  todoItem: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
};

export function TodoList({ todoItem, onUpdate, onDelete }: Props) {
  const { text } = todoItem;
  return (
    <section className='w-full flex justify-between p-2'>
      <p>{text}</p>
      <p className='flex gap-2 pr-4'>
        <button onClick={() => onUpdate(todoItem)}>
          <EditIcon />
        </button>
        <button onClick={() => onDelete(todoItem)}>
          <DeleteIcon />
        </button>
      </p>
    </section>
  );
}

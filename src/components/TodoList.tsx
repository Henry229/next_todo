'use client';
// import { Todo } from '@/models/todo';
import Task from './Task';
import { Todo } from '@/models/todo';
import DeleteIcon from './ui/DeleteIcon';
import EditIcon from './ui/EditIcon';

type Props = {
  todos: Todo[];
  // onUpdate: (todo: Todo) => void;
  // onDelete: (todo: Todo) => void;
};

export function TodoList({ todos }: Props) {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full text-white'>
        {/* head */}
        <thead className='text-neutral-400 text-lg '>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
// <section className='w-full flex justify-between p-2'>
//   <p>{text}</p>
//   <p className='flex gap-2 pr-4'>
//     <button onClick={() => onUpdate(todoItem)}>
//       <EditIcon />
//     </button>
//     <button onClick={() => onDelete(todoItem)}>
//       <DeleteIcon />
//     </button>
//   </p>
// </section>

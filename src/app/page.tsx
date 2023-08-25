// import { getAllTodos } from '@/api';
import AddTodo from '@/components/AddTodo';
import { TodoList } from '@/components/TodoList';
import { Todo } from '@/models/todo';

// interface Todo {
//   id: string;
//   text: string;
//   status: string;
// }

export default async function Home() {
  // const tasks = await getAllTodos();
  // const todos: Todo[] = [
  //   { id: '123', text: 'Buy milk', status: 'Active' },
  //   { id: '124', text: 'Shopping', status: 'Active' },
  // ];

  return (
    <section className='w-full'>
      <div>
        <TodoList />
      </div>
    </section>
  );
}

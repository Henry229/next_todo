import AddTodo from '@/components/AddTodo';
import { TodoList } from '@/components/TodoList';
import { Todo } from '@/models/todo';

// interface Todo {
//   id: string;
//   text: string;
//   status: string;
// }

export default function Home() {
  const todos: Todo[] = [
    { id: '123', text: 'Buy milk', status: 'Active' },
    { id: '124', text: 'Shopping', status: 'Active' },
  ];

  return (
    <body className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='m-4 text-2xl font-bold text-white'>Todo List App</h1>
        <AddTodo />
        {/* <div id='portal' /> */}
      </div>
      <TodoList todos={todos} />
    </body>
  );
}

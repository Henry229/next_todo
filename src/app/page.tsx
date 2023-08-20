import AddTodo from '@/components/AddTodo';
import Image from 'next/image';

export default function Home() {
  return (
    <body className='max-w-screen-md mx-auto'>
      <h1 className='m-4 text-white text-center'>Todo List App</h1>
      <AddTodo />
      <div id='portal' />
    </body>
  );
}

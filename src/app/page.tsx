import AddTodo from '@/components/AddTodo';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className='m-4 text-white text-center'>Todo List App</h1>
      <AddTodo />
    </>
  );
}

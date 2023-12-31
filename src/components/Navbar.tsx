import Link from 'next/link';

export default function Navbar() {
  return (
    <section className='flex items-center justify-between'>
      <Link href={'/'}>
        <h1 className='text-3xl font-bold'>Nextjs Todo</h1>
      </Link>
      <Link className='btn btn-primary p-2' href={'/addTask'}>
        Add Task
      </Link>
    </section>
  );
}

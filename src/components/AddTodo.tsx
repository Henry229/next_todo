export default function AddTodo() {
  return (
    <section className='flex flex-col'>
      <button className=' bg-indigo-800 text-white py-2'>Add New Task</button>
      <div className='bg-cyan-600 text-white flex justify-between px-8 py-2 mt-2'>
        <p>Task</p>
        <p>Action</p>
      </div>
    </section>
  );
}

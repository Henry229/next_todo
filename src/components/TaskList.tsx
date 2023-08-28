import { Todo } from '@/models/todo';
import Link from 'next/link';
// import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const getAllTasks = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/addTask', {
      cache: 'no-store',
    });

    // console.log('****res : ', res);
    if (!res.ok) {
      throw new Error('Failed to fetch tasks');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading tasks: ', error);
    return [];
  }
};

export async function getServerSideProps() {
  const tasks = await getAllTasks();
  return { props: { initialTasks: tasks } };
}

interface TaskListProps {
  initialTasks: Todo[];
}

export default function TaskList({ initialTasks }: TaskListProps) {
  // const [tasks, setTasks] = useState
  // const tasks = await getAllTasks();
  // console.log('>> getTasks : ', tasks);

  return (
    <>
      {initialTasks?.map((t: Todo) => (
        <div
          key={t._id.toString()}
          className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'
        >
          <div>
            <h2 className='font-bold text-2xl'>{t.text}</h2>
            <div>{t.status}</div>
          </div>

          <div className='flex gap-2'>
            {/* <RemoveBtn id={t._id.toString()} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link> */}
          </div>
        </div>
      ))}
    </>
  );
}

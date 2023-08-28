import mongoose from 'mongoose';
import connectDB from '@/util/mongodb';
import { Todo } from '@/models/todo';

const TodoSchema = new mongoose.Schema<Todo>({
  text: String,
  status: String,
});

const TodoModel =
  mongoose.models.Todo || mongoose.model<Todo>('Todo', TodoSchema, 'Tasks');

export async function createTask(text: string, status: string) {
  console.log(text, status);
  await connectDB(); // MongoDB에 연결

  const task = {
    text: text,
    status: status,
  };

  try {
    const newTodo = new TodoModel(task);
    const result = await newTodo.save(); // 새로운 Todo 저장
    console.log('@@@@ newTodo : ', result);

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAllTasks() {
  await connectDB(); // MongoDB에 연결

  try {
    const tasks = await TodoModel.find(); // 모든 Todo 가져오기
    console.log('///// tasks: ', tasks);

    return tasks;
  } catch (error) {
    throw error;
  }
}

//   const uri = process.env.ATLAS_DB_URL!

//   return fetch(uri, {
//     method: 'POST',
//     headers: {
//       'content-type': file.type,
//       authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
//     },
//     body: file,
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       return client.create(
//         {
//           _type: 'post',
//           author: { _ref: userId },
//           photo: { asset: { _ref: result.document._id } },
//           comments: [
//             {
//               comment: text,
//               author: { _ref: userId, _type: 'reference' },
//             },
//           ],
//           likes: [],
//         },
//         { autoGenerateArrayKeys: true }
//       );
//     });
// }

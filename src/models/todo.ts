import { Types } from 'mongoose';

export type Todo = {
  _id: Types.ObjectId | string;
  text: string;
  status: string;
};

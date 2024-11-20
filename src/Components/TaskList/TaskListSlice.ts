import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITasks {
 id: string;
 text: string;
 isSuccess: boolean;
}

interface TaskListData {
 tasks: ITasks[];
}

const initialState: TaskListData = {
 tasks: [
  {
   id: nanoid(4),
   text:
    'В детстве в учебниках по математике всегда были задачи, помеченные звездочкой, так называемые «задачи повышенной сложности». Некоторые учителя по какой-то причине их либо пропускали, либо уделяли очень мало внимания, либо оставляли на само',
   isSuccess: false,
  },
  {
   id: nanoid(4),
   text:
    'В детстве в учебниках по математике всегда были задачи, помеченные звездочкой, так называемые «задачи повышенной сложности». Некоторые учителя по какой-то причине их либо пропускали, либо уделяли очень мало внимания, либо оставляли на самоВ детстве в учебниках по математике всегда были задачи, помеченные звездочкой, так называемые «задачи повышенной сложности». Некоторые учителя по какой-то причине их либо пропускали, либо уделяли очень мало внимания, либо оставляли на само',
   isSuccess: true,
  },
 ],
};

const TaskListSlice = createSlice({
 name: 'taskList',
 initialState,
 reducers: {
  Create: ({ tasks }, action: PayloadAction<string>) => {
   const newTask: ITasks = {
    id: nanoid(4),
    text: action.payload,
    isSuccess: false,
   };
   tasks = [...tasks, newTask];
  },

  Update: ({ tasks }, action: PayloadAction<{ id: string; isSuccess: boolean }>) => {
   tasks = tasks.map((task) => {
    if (task.id === action.payload.id) {
     return {
      id: task.id,
      text: task.text,
      isSuccess: action.payload.isSuccess,
     };
    }
    return task;
   });
  },
  Delete: ({ tasks }, action: PayloadAction<string>) => {
   tasks = tasks.filter((item) => item.id !== action.payload);
  },
 },
});

export const { Create, Update, Delete } = TaskListSlice.actions;

export default TaskListSlice.reducer;

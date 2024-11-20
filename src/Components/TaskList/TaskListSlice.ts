import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITasks {
 id: string;
 text: string;
 isSuccess: boolean;
}

interface ITaskListData {
 tasks: ITasks[];
}

const initialState: ITaskListData = {
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
  Create: (state, action: PayloadAction<string>) => {
   const newTask: ITasks = {
    id: nanoid(4),
    text: action.payload,
    isSuccess: false,
   };
   state.tasks = [...state.tasks, newTask];
  },

  Update: (state, action: PayloadAction<{ id: string; isSuccess: boolean }>) => {
   state.tasks = state.tasks.map((task) => {
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
  Delete: (state, action: PayloadAction<string>) => {
   state.tasks = state.tasks.filter((item) => item.id !== action.payload);
  },
 },
});

export const { Create, Update, Delete } = TaskListSlice.actions;

export default TaskListSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import TaskListSlice from './Components/TaskList/TaskListSlice';

const store = configureStore({
 reducer: { TaskListSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
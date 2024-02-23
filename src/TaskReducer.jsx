import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "./Data";

const TaskSlice = createSlice({
  name: "tasks",
  initialState: taskList,
  reducers: {
    addTask: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, name, description } = action.payload;
      const utask = state.find((task) => task.id == id);
      if (utask) {
        utask.name = name;
        utask.description = description;
      }
    },

    deleteTask: (state, action) => {
      const { id } = action.payload;
      const utask = state.find((task) => task.id == id);
      if (utask) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addTask, updateTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;

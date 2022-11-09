import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = [
  {
    bl: false,
    name: "Mka",
  },
  {
    bl: true,
    name: "mkas",
  },
];

export const add = createAction("add");
export const changeBl = createAction("change");
export const deleteTodo = createAction("delete");

export const todoReducer = createReducer(initialState, (build) => {
  build
    .addCase(changeBl, (state, action) => {
      return state.map((item, index) => {
        console.log(index, action.payload);
        return index === action.payload ? { ...item, bl: !item.bl } : item;
      });
    })
    .addCase(add, (state, action) => {
      state.unshift({
        name: action.payload,
      });
    })
    .addCase(deleteTodo, (state, action) => {
      return state.filter((item, index) => {
        return index != action.payload ? item : null;
      });
    });
});

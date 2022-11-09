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
      state[action.payload].bl = !state[action.payload].bl;
    })
    .addCase(add, (state, action) => {
      state.unshift({
        name: action.payload,
      });
    })
    .addCase(deleteTodo, (state, action) => {
      state.splice(action.payload, 1);
    });
});

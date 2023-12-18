import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

export type Store ={
    project:Number,
    changeProject:(number:Number)=>void
}

export const useProject = createWithEqualityFn<Store>((set, get) => ({
  project: 0,
  changeProject(number:Number) {


  },
}));

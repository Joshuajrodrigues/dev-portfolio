import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

export type Store ={
    project:number,
    changeProject:(number:number)=>void
}

export const useProject = createWithEqualityFn<Store>((set, get) => ({
  project: 0,
  changeProject(number) {
    set({
        project:number
    })

  },
}));

import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

export type Color =  "Yellow" | "Orange" | "Green"
type Rgb = "bg-yellow-500"|"bg-orange-500"|"bg-green-500"
export type Store ={
    theme:Rgb,
    changeTheme:(color:Color)=>void
}

export const useTheme = createWithEqualityFn<Store>((set, get) => ({
  theme: "bg-yellow-500",
  changeTheme(color: Color) {
    let bg:Rgb = "bg-yellow-500";
    if (color === "Yellow") {
      bg = "bg-yellow-500";
    } else if (color === "Orange") {
      bg = "bg-orange-500";
    } else if (color === "Green") {
      bg = "bg-green-500";
    }

    set({
      theme: bg,
    });
  },
}));

import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

export type Color =  "Yellow" | "Orange" | "Green"
type Rgb = "bg-yellow-500"|"bg-orange-400"|"bg-lime-500" |"bg-black text-white"
export type Store ={
    theme:Rgb,
    changeTheme:(color:Color)=>void
}

export const useTheme = createWithEqualityFn<Store>((set, get) => ({
  theme: "bg-lime-500",
  changeTheme(color: Color) {
    let bg:Rgb = "bg-yellow-500";
    if (color === "Yellow") {
      bg = "bg-yellow-500";
    } else if (color === "Orange") {
      bg = "bg-orange-400";
    } else if (color === "Green") {
      bg = "bg-lime-500";
    }

    set({
      theme: bg,
    });
  },
}));

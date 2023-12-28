import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

export type Color =  "Yellow" | "Orange" | "Green"
type Rgb = "bg-rose-400"|"bg-orange-400"|"bg-green-500" |"bg-black text-white"
export type Store ={
    theme:Rgb,
    changeTheme:(color:Color)=>void
}

export const useTheme = createWithEqualityFn<Store>((set, get) => ({
  theme: "bg-orange-400",
  changeTheme(color: Color) {
    let bg:Rgb = "bg-rose-400";
    if (color === "Yellow") {
      bg = "bg-rose-400";
    } else if (color === "Orange") {
      bg = "bg-orange-400";
    } else if (color === "Green") {
      bg = "bg-green-500";
    }

    set({
      theme: bg,
    });
  },
}));

"use client";
import { Color, Store, useTheme } from "@/store/theme";
import { useState } from "react";
import { shallow } from "zustand/shallow";


const selector= (store: Store) => ({
    theme: store.theme,
    changeTheme:store.changeTheme
  });

export default function ColorPicker({ items }: { items: Color[] }) {
  const [activeItem, setActiveItem] = useState<string | null>(items[0]);

  const {theme, changeTheme} = useTheme(selector,shallow)

  return (
    <div className="font-bold flex mt-4 items-center justify-around">
      {items.map((item) => {
        const isChecked = activeItem === item;
        let bg = "bg-white";

        if (item === "Yellow") {
          bg = "bg-yellow-500";
        } else if (item === "Orange") {
          bg = "bg-orange-500";
        } else if (item === "Green") {
          bg = "bg-lime-400";
        }

        return (
          <button
            onClick={() => {
              setActiveItem(item);
              changeTheme(item)
            }}
            className="my-2 flex items-center"
            role="radio"
            aria-label={item +" theme"}
            aria-checked={theme===bg&& isChecked}
            key={item}
          >
            <div className={`mr-2.5 h-7 w-7 rounded-sm ${bg} p-1 outline outline-2 outline-black`}>
              {theme===bg&& isChecked && (
                <div className="h-full w-full rounded-full bg-black"></div>
              )}
            </div>
            {/* <p className="mr-3">{item}</p> */}
          </button>
        );
      })}
    </div>
  );
}

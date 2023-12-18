"use client";
import Button from "./button";
import { Download } from "lucide-react";
export default function Resume() {
  return (
    <Button onClick={() => {}}>
      <span className="flex text-lg font-bolder">
        Resume <Download className="ml-2" />{" "}
      </span>
    </Button>
  );
}

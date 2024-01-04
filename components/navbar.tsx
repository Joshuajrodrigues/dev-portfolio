"use client";

import { CrossIcon, Download, LucideMenu, MailIcon, MenuIcon, PanelTopClose, PanelTopOpen } from "lucide-react";
import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className=" bg-amber-100 shadow-black shadow-sm fixed w-full top-0 z-10 ">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="font-bold ">
            <Link className="flex items-center justify-between" href="/">
              <span className=" font-oneslice font-bold mr-1">Portfolio |</span>
              <br className=" hidden md:inline lg:hidden ml-2" /> Joshua Rodrigues
            </Link>
          </div>

          <div className="hidden md:flex md:items-center font-bold">
            <a
              href="#feat"
              onClick={() => router.push("/#feat")}
              className="text-black text-sm font-bold  mr-4"
            >
              Featured projects
            </a>
            <a
              href="#career"
              onClick={() => router.push("/#career")}
              className="text-black text-sm font-bold  mr-4"
            >
              Career
            </a>
            <a
              href="#about"
              onClick={() => router.push("/#about")}
              className="text-black text-sm font-bold  mr-4"
            >
              About me
            </a>

            <a
              href="#contact"
              onClick={() => router.push("/#contact")}
              className="text-black text-sm font-bold mr-4"
            >
              Contact
            </a>
            <span className=" mr-4 text-gray-500 ">|</span>
            <a
              className="cursor-pointer rounded-md border-2 border-black  px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none  bg-white w-18    mr-4 text-black p-1 text-sm flex justify-center items-center font-bold "
              target="_blank"
              href="mailto:joshuarodriguesdev@gmail.com"
            >
              Email me <MailIcon size={12} className="ml-1" />
            </a>
            <Button
              ariaLabel="Click to download resume"
              onClick={() => {
                let a = document.createElement("a");
                a.href = "/resume/Joshua-Rodrigues-Resume-2024.pdf";
                a.target = "_blank";
                a.click();
              }}
              className="text-black p-1 text-sm flex justify-center items-center font-bold "
            >
              Resume <Download className={`ml-1 `} size={12} />
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer"
            aria-label="Click to open navbar"
          >
            {
              menuOpen ? <PanelTopClose/> : <PanelTopOpen/>
            }
         
          </button>
        </div>
        {menuOpen && (
          <div className="block md:hidden bg-amber-100 border-t-2 border-black py-2">
            <div className="flex flex-col">
              <a
                href="#feat"
                onClick={() => router.push("/#feat")}
                className="text-black text-md font-semibold  mb-2"
              >
                Featured projects
              </a>
              <a
                href="#career"
                onClick={() => router.push("/#career")}
                className="text-black text-md font-semibold  mb-2"
              >
                Career
              </a>
              <a
                href="#about"
                onClick={() => router.push("/#about")}
                className="text-black text-md font-semibold  mb-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => router.push("/#contact")}
                className="text-black text-md font-semibold  mb-2"
              >
                Contact
              </a>
              <div className="flex justify-between items-center border-t-2 border-black py-2">
                <a
                  target="_blank"
                  href="mailto:joshuarodriguesdev@gmail.com"
                  className=" font-extrabold cursor-pointer  rounded-md border-2 border-black  px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none text-black bg-white w-32  lg:w-80 flex items-center justify-center "
                >
                  Email me <MailIcon className="ml-2" />
                </a>
                <Button
                  className="text-black bg-white w-32 h-8 flex items-center justify-center "
                  ariaLabel="Click to download resume"
                  onClick={() => {
                    let a = document.createElement("a");
                    a.href = "/resume/JoshuaRodrigues_resume_2023.pdf";
                    a.target = "_blank";
                    a.click();
                  }}
                >
                  <span className=" flex text-lg font-bolder">
                    Resume <Download className={`ml-2 `} />{" "}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

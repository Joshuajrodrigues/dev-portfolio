"use client";

import { Download, MailIcon, PanelTopClose, PanelTopOpen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./button";
import SmallResume from "./smallResume";
import { motion } from "framer-motion";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div  className=" bg-amber-100 shadow-black shadow-sm fixed w-full top-0 z-10 2xl:text-4xl ">
      <div className=" mx-auto px-4 2xl:pl-8">
        <div className="flex items-center justify-between py-4">
          <div className="font-bold ">
            <Link
              className="flex flex-row items-center justify-between"
              href="/"
            >
              <span className=" font-oneslice font-bold ">Portfolio </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center font-bold">
            <a
              href="#feat"
              onClick={() => router.push("/#feat")}
              className="text-black text-sm  2xl:text-3xl font-bold  mr-4"
            >
              Featured projects
            </a>
            <a
              href="#career"
              onClick={() => router.push("/#career")}
              className="text-black text-sm 2xl:text-3xl font-bold  mr-4"
            >
              Career
            </a>
            <a
              href="#about"
              onClick={() => router.push("/#about")}
              className="text-black text-sm 2xl:text-3xl font-bold  mr-4"
            >
              About me
            </a>

            <a
              href="#contact"
              onClick={() => router.push("/#contact")}
              className="text-black text-sm 2xl:text-3xl font-bold mr-4"
            >
              Contact
            </a>
            <span className=" mr-4 text-black ">|</span>
            <a
              className="cursor-pointer rounded-md border-2 border-black 2xl:text-3xl  px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none  bg-white w-18    mr-4 text-black p-1 text-sm flex justify-center items-center font-bold "
              target="_blank"
              href="mailto:joshuarodriguesdev@gmail.com"
            >
              Email me <MailIcon size={12} className="ml-1 2xl:mx-3 2xl:scale-150" />
            </a>
            <SmallResume />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer"
            aria-label="Click to open navbar"
          >
            {menuOpen ? <PanelTopClose /> : <PanelTopOpen />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
          onBlur={()=>setMenuOpen(false)}
            transition={{
              duration: 0.8,
              ease: menuOpen ? "easeOut" : "easeIn",
              type: "inertia",
            }}
            initial={{
              height: 0,
            }}
            animate={{
              height: menuOpen ? "fit-content" : 0,
            }}
            className="block md:hidden bg-amber-100 border-t-2 border-black py-2"
          >
            <motion.div
              transition={{
                duration: 1,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: menuOpen ? 1 : 0,
              }}
              className="flex flex-col"
            >
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
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

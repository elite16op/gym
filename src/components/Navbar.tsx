import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {

    // for navbar toggle button
    const [show,setShow] = useState<boolean>(false);

    // for bolding the selected page
    const [select,setSelect] = useState<string>("home")

    // toggle function on btn click
    const toggle=()=>{
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }


  return (
    <motion.div className={`mx-auto my-10 w-[85%] rounded-md`}
    layout
    transition={{delay:0}}
    >
      <div
        className="top flex justify-between px-5 py-3"
        style={{
          alignItems: "center",
        }}
      >
        <div className="">
          <i className="text-lg font-medium color">SweatLab</i>
        </div>
        <div className="hidden gap-x-4 lg:flex">
          <i className={`text-[0.93rem] ${(select==="home"?"color":"")}`}>Home</i>
          <i className={`text-[0.93rem] ${(select==="benefits"?"color":"")}`}>Benefits</i>
          <i className={`text-[0.93rem] ${(select==="ourClasses"?"color":"")}`}>Our Classes</i>
          <i className={`text-[0.93rem] ${(select==="contactUs"?"color":"")}`}>Contact Us</i>
        </div>
        <div className="hidden gap-x-4 lg:flex">
          <div className="inline-block rounded-md border border-black px-3 py-1">
            <i className="font-medium color">Sign in</i>
          </div>
          <div className="inline-block rounded-md border border-black px-3 py-1 btn">
            <i className="font-medium">Become a member</i>
          </div>
        </div>
        <div className="lg:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
      { show && <motion.div className="lg:hidden"
      layout
      initial={{opacity:0,y:-10}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-10}}
      transition={{delay:0.15}}
      >
        <ul className="">
          <li className=""></li>
          <li className={`${(select==="home"?"color":"")}`}>Home</li>
          <li className={`${(select==="benefits"?"color":"")}`}>Our Classes</li>
          <li className={`${(select==="ourClasses"?"color":"")}`}>Benefits</li>
          <li className={`${(select==="contactUs"?"color":"")}`}>Contact Us</li>
          <li className="mt-10">
            <div className="inline-block rounded-md border border-black px-3 py-1">
              <i className="font-medium color">Sign in</i>
            </div>
          </li>
          <li>
            <div className="inline-block rounded-md border border-black px-3 py-1 btn">
              <i className="font-medium">Become a member</i>
            </div>
          </li>
        </ul>
      </motion.div> }
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;

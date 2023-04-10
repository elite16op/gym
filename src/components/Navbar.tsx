import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { showS, goAt } from "../store/Store";

type Props = {};

const Navbar = (props: Props) => {

    const dispatch = useDispatch();

    // for navbar toggle button
    const [show,setShow] = useState<boolean>(false);

    // for bolding the selected page
    const [select,setSelect] = useState<string>("home")

    // for mobile scrolled 
    const [move,setMove] = useState(false);

    // toggle function on btn click
    const toggle=()=>{
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }


  return (
    <motion.div className={`mx-auto my-10 w-[85%] rounded-md sticky top-0 bglite shadow-lg z-10`}
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
          <i className="text-lg font-medium color cursor-pointer">SweatLab</i>
        </div>
        <div className="hidden gap-x-4 lg:flex">
          <i className={`text-[0.93rem] cursor-pointer ${(select==="home"?"color":"")}`} onClick={()=>{
            setSelect("home")
            dispatch(goAt({
              clicked : true,
              at : "home"
            }))
            scrollTo({
              top:0,
              left:0,
              behavior:"smooth"
            })
          }}>Home</i>
          <i className={`text-[0.93rem] cursor-pointer ${(select==="benefits"?"color":"")}`} onClick={()=>{
            setSelect("benefits")
            dispatch(goAt({
              clicked : true,
              at : "Benefits"
            }))
            scrollTo({
              left:0,
              top:600,
              behavior:"smooth",
            });
            }}>Benefits</i>
          <i className={`text-[0.93rem] cursor-pointer ${(select==="ourClasses"?"color":"")}`} onClick={()=>{
            setSelect("ourClasses")
            dispatch(goAt({
              clicked : true,
              at : "ourClasses"
            }))
            scrollTo({
              left:0,
              top:1100,
              behavior:"smooth",
            });
            }}>Our Classes</i>
          <i className={`text-[0.93rem] cursor-pointer ${(select==="contactUs"?"color":"")}`} onClick={()=>{
            setSelect("contactUs")
            dispatch(goAt({
              clicked : true,
              at : "contactUs"
            }))
            scrollTo({
              left:0,
              top:2000,
              behavior:"smooth",
            });
            }}>Contact Us</i>
        </div>
        <div className="hidden gap-x-4 lg:flex">
          <div className="inline-block rounded-md border border-black px-3 py-1 cursor-pointer" onClick={()=>{
            const modalWidth = 400; // adjust as needed
            const modalHeight = 320; // adjust as needed
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const top = (viewportHeight - modalHeight) / 2;
            const left = (viewportWidth - modalWidth) / 2;
            dispatch(showS({
              show : true,
              top : top,
              left : left,
            }))
          }}>
            <i className="font-medium color">Sign in</i>
          </div>
          <div className="inline-block rounded-md border border-black px-3 py-1 btn cursor-pointer">
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
      { show && <motion.div className={`lg:hidden py-3`}
      layout
      initial={{opacity:0,y:-10}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-10}}
      transition={{delay:0.15}}
      >
        <ul className="">
          <li className=""></li>
          <li className={`cursor-pointer ${(select==="home"?"color":"")}`} onClick={()=>{
            setSelect("home")
            dispatch(goAt({
              clicked : true,
              at : "home"
            }))
            scrollTo({
              left:0,
              top:0,
              behavior:"smooth",
            });
            }}>Home</li>
          <li className={`cursor-pointer ${(select==="benefits"?"color":"")}`} onClick={()=>{
            setSelect("benefits")
            dispatch(goAt({
              clicked : true,
              at : "benefits"
            }))
            scrollTo({
              left:0,
              top:2000,
              behavior:"smooth",
            });
            }}>Our Classes</li>
          <li className={`cursor-pointer ${(select==="ourClasses"?"color":"")}`} onClick={()=>{
            setSelect("ourClasses")
            dispatch(goAt({
              clicked : true,
              at : "ourClasses"
            }))
            scrollTo({
              left:0,
              top:950,
              behavior:"smooth",
            });
            }}>Benefits</li>
          <li className={`cursor-pointer ${(select==="contactUs"?"color":"")}`} onClick={()=>{
            setSelect("contactUs")
            dispatch(goAt({
              clicked : true,
              at : "contactUs"
            }))
            scrollTo({
              left:0,
              top:2500,
              behavior:"smooth",
            });
            }}>Contact Us</li>
          <li className="mt-10">
            <div className="inline-block rounded-md border border-black px-3 py-1 cursor-pointer" onClick={()=>{
              const modalWidth = 400; // adjust as needed
              const modalHeight = 320; // adjust as needed
              const viewportWidth = window.innerWidth;
              const viewportHeight = window.innerHeight;
              const top = (viewportHeight - modalHeight) / 2;
              const left = (viewportWidth - modalWidth) / 2;
              dispatch(showS({
                show : true,
                top : top,
                left : left,
              }))
            }}>
              <i className="font-medium color">Sign in</i>
            </div>
          </li>
          <li>
            <div className="inline-block rounded-md border border-black px-3 py-1 btn cursor-pointer">
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

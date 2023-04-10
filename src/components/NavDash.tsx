import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { showS, save } from "../store/Store";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type Props = {};

const NavDash = (props: Props) => {

  // to navigate around pages
  const navigate = useNavigate();

  useEffect(()=>{
    if (Cookies.get("id")=="") {
      navigate("/");
    }
  },[])

  const id = Cookies.get("id");

    const dispatch = useDispatch();

    // for navbar toggle button
    const [show,setShow] = useState<boolean>(false);

    // for bolding the selected page
    const [select,setSelect] = useState<string>("exercises")

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
          <i className="text-lg font-medium color cursor-pointer">SweatLab</i>
        </div>
        <div className="hidden gap-x-4 lg:flex">
          <i className={`text-[0.93rem] cursor-pointer ${(select==="exercises"?"color":"")}`} onClick={()=>{
            setSelect("exercise");
            dispatch(save("exer"));
            navigate(`/${id}/exc`);
            }}>Exercises</i>
          <i className={`text-[0.93rem] cursor-pointer ${(select==="courses"?"color":"")}`} onClick={()=>{
            setSelect("courses")
            dispatch(save("cour"));
            }}>Courses</i>
          <i className={`text-[0.93rem] cursor-pointer ${(select==="account"?"color":"")}`} onClick={()=>{
            setSelect("account")
            dispatch(save("acc"));
            navigate(`/${id}/acc`);
            }}>Account</i>
        </div>
        <div className="hidden lg:block">
            <svg width="35px" height="35px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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
          <li className="block lg:hidden my-5">
            <div className="lg:hidden">
                <svg width="35px" height="35px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </li>
          <li className={`cursor-pointer ${(select==="exercises"?"color":"")}`} onClick={()=>{
            setSelect("exercise")
            dispatch(save("exer"));
            navigate(`/${id}/exc`);
            }}>Exercises</li>
          <li className={`cursor-pointer ${(select==="courses"?"color":"")}`} onClick={()=>{
            setSelect("courses")
            dispatch(save("cour")); 
            }}>Courses</li>
          <li className={`cursor-pointer ${(select==="account"?"color":"")}`} onClick={()=>{
            setSelect("account")
            dispatch(save("acc"));
            navigate(`/${id}/acc`);
            }}>Account</li>
        </ul>
      </motion.div> }
      </AnimatePresence>
    </motion.div>
  );
};

export default NavDash;

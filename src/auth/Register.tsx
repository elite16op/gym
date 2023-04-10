import React, { useEffect, useState } from "react";
import Google from "../assets/g.png";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { showS } from "../store/Store";
import { signUpWithEmail, signInWithGoogle } from "../supabase/supaAuth";
import { checkAuth } from "../supabase/urlCond";
import { redirect, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

type Props = {};

function Register() {
  // for navigation
  const navigate = useNavigate();

  //use selector
  const {top,left} = useSelector((state:any)=>state.sign);

  // for redux
  const dispatch = useDispatch();

  // for storing password and email
  const [e, setE] = useState<string>("");
  const [p, setP] = useState<string>("");

  // sign up function
  const signUp = () => {
    signUpWithEmail(e, p).then((p) => {
      const id = Cookies.get("id");
      navigate(`/${id}/exc`);
    });
    const check = checkAuth();
    if (check == false) {
      navigate("/");
    } else {
      navigate("/exc");
    }
  };

  // sign in with google
  const signInGoogle = () => {
    signInWithGoogle().then((p) => {
        console.log(p);
        const uid = Cookies.get("id");
        navigate(`/${uid}/exc`);
    });
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        dispatch(showS({
            show : false,
            top : 0,
            left : 0,
        }));
      }}
    >
      <div
        className={`absolute left-[15%] top-[15%] z-40 mx-auto w-[20rem] shadow-lg lg:left-[37%] lg:top-[20%] idk`}
      >
        <div className="">
          <div className="bg rounded-md px-6 py-3">
            <i className="block text-white">SweatLab</i>
            <i className="text-xl font-medium text-white">Sign up</i>
          </div>
          <div
            className="boutline bglite rounded-bl-md rounded-br-md py-6 pt-4"
            style={{
              borderTop: "0px",
            }}
          >
            <input
              type="text"
              placeholder="email"
              className="color font mx-auto my-2 block w-[85%] rounded-md px-3 py-2 text-base"
              onChange={(e) => {
                setE(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="color font mx-auto my-2 block w-[85%] rounded-md px-3 py-2 text-base"
              onChange={(e) => {
                setP(e.target.value);
              }}
            />
            <motion.button
              className="font bg mx-auto my-1 block w-[85%] rounded-md py-1 text-white"
              onClick={signUp}
              whileTap={{ y: [0, -3, 0] }}
            >
              Sign up
            </motion.button>
            {/* <div className="">
              <hr className="bg mx-auto my-6 w-[85%]" />
                <button className="google mx-auto flex w-[85%] items-center gap-x-4 rounded-md bg-white px-10 py-2">
                <motion.div
                  className="mx-auto flex items-center gap-x-2"
                  onClick={signInGoogle}
                >
                  <img src={Google} alt="" className="w-8" />
                  <i className="text-sm">Sign up with google</i>
                </motion.div>
              </button> 
            </div> */}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}

export default Register;

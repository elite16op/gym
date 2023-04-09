import React, {useEffect, useState} from 'react'
import Google from '../assets/g.png'
import { motion } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import {useDispatch} from 'react-redux'
import { showS } from '../store/Store'
import { signUpWithEmail, signInWithGoogle } from '../supabase/supaAuth'
import { checkAuth } from '../supabase/urlCond'
import { useNavigate } from 'react-router-dom'

type Props = {}

function Register() {

    // for navigation
    const navigate = useNavigate();

    // for redux
    const dispatch = useDispatch();

    // for storing password and email
    const [e,setE] = useState<string>("");
    const [p,setP] = useState<string>("");

    // sign up function 
    const signUp=()=>{
        signUpWithEmail(e,p);
        const check = checkAuth();
        if (check==false) {
            navigate("/");
        } else {
            navigate("/exc");
        }
    }


    // sign in with google 
    const signInGoogle=()=>{
        signInWithGoogle();
    }



  return (
    <OutsideClickHandler onOutsideClick={()=>{
        dispatch(showS(false));
    }}>
    <div className={`absolute w-[20rem] mx-auto shadow-lg left-[15%] top-[20%] lg:left-[37%] lg:top-[20%] z-20`}
    >
        <div className=''>
            <div className='bg px-6 py-3 rounded-md'>
                <i className='text-white block'>SweatLab</i>
                <i className='text-white text-xl font-medium'>Sign up</i>
            </div>
            <div className='pt-4 boutline py-6 rounded-br-md rounded-bl-md bglite' style={{
                borderTop : "0px"
            }}>
                <input type="text" placeholder='email' className='mx-auto my-2 block py-2 px-3 w-[85%] text-base color font rounded-md' onChange={(e)=>{setE(e.target.value)}} />
                <input type="text" placeholder='password' className='mx-auto my-2 block py-2 px-3 w-[85%] text-base color font rounded-md' onChange={(e)=>{setP(e.target.value)}} />
                <motion.button className='font w-[85%] block my-1 py-1 rounded-md bg text-white mx-auto' onClick={signUp}
                whileTap={{y:[0,-3,0]}}
                >Sign up</motion.button>
                <div className=''>
                    <hr className='w-[85%] mx-auto bg my-6' />
                    <button className='google flex gap-x-4 items-center mx-auto px-10 py-2 w-[85%] rounded-md bg-white'>
                        <motion.div className='mx-auto flex items-center gap-x-2'
                        onClick={signInGoogle}
                        >
                            <img src={Google} alt="" className='w-8' />
                            <i className='text-sm'>Sign up with google</i>
                        </motion.div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </OutsideClickHandler>
  )
}

export default Register
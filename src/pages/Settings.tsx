import { useEffect, useState } from "react";
import Email from "../components/Contact";
import NavDash from "../components/NavDash";
import { logOut, deleteUser, changePass, retrieveUser } from "../supabase/supaAuth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

type Props = {};

const Settings = (props: Props) => {
  const [user,setUser] = useState<object>({});

  const navigate = useNavigate();
  
  const [mail, setMail] = useState<string>("");
  
  useEffect(() => {

    if (Cookies.get("id") == "") {
      navigate("/");
    }
    const id = Cookies.get("id");
  },[]);

  

  return (
    <div>
      <NavDash />
      <div className="boutline mx-auto my-5 w-[85%] rounded-md border border-black px-4 py-5 md:w-[500px]">
        <div className="flex items-center gap-x-4">
          <div className="">
            <svg
              width="35px"
              height="35px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="name">
            <i className="font-medium">User : {Cookies.get("email")}</i>
          </div>
        </div>
        <div className="features mt-5 flex-col">
          <div className="logout">
            <i className="my-2 block">Want to logout from your account? </i>
            <button
              className="btn rounded-md px-2 py-1"
              onClick={() => {
                logOut();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
          <hr className="boutline my-3 w-[100%] opacity-25" />
          <div className="resetpass">
            <i className="my-2 block">Reset your password </i>
            <div className="flex gap-x-3">
              <input
                type="text"
                className="email bg block rounded px-2 py-1 text-white outline-none"
                placeholder="enter email"
                onClick={(e) => {
                  const target = e.target as HTMLInputElement;
                  setMail(target.value);
                }}
              />
              <button
                className="btn rounded-md px-2 py-1"
                onClick={(e) => {
                  changePass(mail);
                }}
              >
                Send email
              </button>
            </div>
          </div>
          <hr className="boutline my-3 w-[100%] opacity-25" />
          <div className="delete">
            <i className="my-2 block">Permanently delete your account </i>
            <button className="rounded-md bg-red-600 px-2 py-1 text-white" onClick={()=>{
              const id:string|undefined = Cookies.get("id");
              deleteUser(id?id:"");
              navigate("/");
            }}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <Email />
    </div>
  );
};

export default Settings;

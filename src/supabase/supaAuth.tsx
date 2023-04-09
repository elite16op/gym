import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { store, saveId } from "../store/Store";
import Cookies from "js-cookie";
import { dbStore } from "./supaDb";
import uniqid from 'uniqid'
import { m } from "framer-motion";



// client setup
export const supabase = createClient(
  "https://iftqvitjfbfaibgxctrr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdHF2aXRqZmJmYWliZ3hjdHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0MjkxODAsImV4cCI6MTk5NjAwNTE4MH0.BFR-fYGKA72xN487gmZJCvbAVP7G8LYQWhrXERpjV0E"
);


// sign in with email in supabase
export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  const id:string|undefined = data.user?.id;
  Cookies.set("id",id?id:"");
  const uid = Cookies.get("id");
  window.location.href=window.location.origin+`/${uid}/exc`;
}


// sign in with google into supabase
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google', 
  })  
    const uuid = uniqid();
    Cookies.set("id",uuid);
    const uid = Cookies.get("id");
    window.location.href=window.location.origin+`/${uid}/exc`
}


// building function to check if user is already there and directly log in them 
export async function checksigninCookie(cookie:string) {
  const { data: { user }, error } = await supabase.auth.getUser(cookie);
  const navigate = useNavigate();
  if (error) {
    navigate("/");
  }
  if (user) {
    console.log("user found");
    navigate(`/${cookie}`);
  } else {
    console.log("user not found");
    navigate("/");
  }
} 


// function to log out the user 
export async function logOut() {
  const { error } = await supabase.auth.signOut();
}


// delete user account
export async function deleteUser(id:string) {
  const { data, error } = await supabase.auth.admin.deleteUser(
    id,
  )
  Cookies.remove("id");
  Cookies.remove("email");

}

// change account password 
export async function changePass(email:string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin,  
  })
}


// retrieve the user
export async function retrieveUser() {
  const { data: { user } } = await supabase.auth.getUser();
  const mail: string|undefined = user?.email;
  Cookies.set("email", mail?mail:"")

  return user;
}


import Cookies from "js-cookie";
import { supabase } from "./supaAuth";

export function checkAuth() {
  const id = Cookies.get("userId");
  if (id==null) {
    return false;
  }
  return true;
}

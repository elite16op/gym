import { supabase } from "./supaAuth";

export async function dbStore(uuid:string) {
  const { error } = await supabase
    .from("users")
    .insert({uuid: uuid });
}

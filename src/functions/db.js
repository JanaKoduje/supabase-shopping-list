import { getSupabase } from "./supabase";

export const getShoppingItem = (userId) => {
  const supabase = getSupabase();

  return supabase.from("shopping_items").select("*").eq("user_id", userId);
};

export const addShoppingItem = (product, amount, unit, userId) => {
  const supabase = getSupabase();
  return supabase.from("shopping_items").insert({
    product: product,
    amount: amount,
    unit: unit,
    user_id: userId,
  });
};

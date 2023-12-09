import { Database } from "./supabase";

export type BadCode = Database["public"]["Tables"]["bad_codes"]["Row"];
export type Files = Database["public"]["Tables"]["files"]["Row"];

export interface BadCodeWithFiles extends BadCode {
    files: Files[];
}
import { Database } from "./supabase";

export type BadCode = Database["public"]["Tables"]["bad_codes"]["Row"];
export type File = Database["public"]["Tables"]["files"]["Row"];

export interface BadCodeWithFiles extends BadCode {
    files: File[];
}
import { Database } from "./supabase";

export type User = Database["public"]["Tables"]["users"]["Row"];
export type BadCode = Database["public"]["Tables"]["bad_codes"]["Row"];
export type File = Database["public"]["Tables"]["files"]["Row"];

export interface BadCodeWithFiles extends BadCode {
    files: File[];
}

// deprecated
export interface BadCodeWithUser extends BadCode {
    user: User;
}

export interface BadCodeDetail extends BadCode {
    user: User;
}
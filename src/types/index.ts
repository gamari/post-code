import { Database } from "./supabase";

import { User as SupabaseUser } from "@supabase/supabase-js"

export type User = Database["public"]["Tables"]["users"]["Row"];
export type Code = Database["public"]["Tables"]["codes"]["Row"];
export type File = Database["public"]["Tables"]["files"]["Row"];
export type Favorite = Database["public"]["Tables"]["favorites"]["Row"];
export type Comment = Database["public"]["Tables"]["comments"]["Row"];
export type AuthUser = SupabaseUser;

export interface CodeWithFiles extends Code {
    files: File[];
}

// deprecated
export interface CodeWithUser extends Code {
    user: User;
}

export interface CodeDetail extends Code {
    user: User;
    files: File[];
    favorites_count?: number;
}

export interface CommentDetail extends Comment {
    user: User;
    code: Code;
}
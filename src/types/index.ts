import { Database } from "./supabase";

import { User as SupabaseUser } from "@supabase/supabase-js"

export type AuthUser = SupabaseUser;
export type User = Database["public"]["Tables"]["users"]["Row"];
export type Code = Database["public"]["Tables"]["codes"]["Row"];
export type File = Database["public"]["Tables"]["files"]["Row"];
export type Favorite = Database["public"]["Tables"]["favorites"]["Row"];
export type Comment = Database["public"]["Tables"]["comments"]["Row"];
export type Language = Database["public"]["Tables"]["languages"]["Row"];

// Code
export interface CodeFormType {
    title: string;
}

export interface CodeWithFiles extends Code {
    files: File[];
}

export interface SearchResultCode extends Code {
    file: File;
}

export interface CodeDetail extends Code {
    user: User;
    files: File[];
    favorites_count?: number;
    language?: Language;
}

// Comment
export interface CommentDetail extends Comment {
    user: User;
}


// deprecated

export interface CodeWithUser extends Code {
    user: User;
}


export interface CommentDetail extends Comment {
    user: User;
    code: Code;
}